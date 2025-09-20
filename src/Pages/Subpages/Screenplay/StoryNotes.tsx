import React, { useState, useRef, useCallback } from 'react';
import './Styles/StoryNotes.css';

interface Position {
  x: number;
  y: number;
}

interface StickyNote {
  id: string;
  text: string;
  position: Position;
  color: string;
}

interface Relationship {
  id: string;
  fromNoteId: string;
  toNoteId: string;
}

interface StoryGraph {
  notes: StickyNote[];
  relationships: Relationship[];
}

const COLORS = [
  '#FFE066', // Yellow
  '#FF9999', // Pink
  '#99CCFF', // Blue
  '#99FF99', // Green
  '#FFCC99', // Orange
  '#CC99FF', // Purple
];

export default function StoryNotes() {
  const [notes, setNotes] = useState<StickyNote[]>([]);
  const [relationships, setRelationships] = useState<Relationship[]>([]);
  const [draggedNote, setDraggedNote] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });
  const [isCreatingRelationship, setIsCreatingRelationship] = useState(false);
  const [relationshipStart, setRelationshipStart] = useState<string | null>(null);
  const [editingNote, setEditingNote] = useState<string | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  const addNote = useCallback(() => {
    const newNote: StickyNote = {
      id: crypto.randomUUID(),
      text: 'New Note',
      position: { 
        x: Math.random() * 400 + 50, 
        y: Math.random() * 300 + 50 
      },
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
    setNotes(prev => [...prev, newNote]);
    setEditingNote(newNote.id);
  }, []);

  const updateNoteText = useCallback((id: string, text: string) => {
    setNotes(prev => prev.map(note => 
      note.id === id ? { ...note, text } : note
    ));
  }, []);

  const deleteNote = useCallback((id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id));
    setRelationships(prev => prev.filter(rel => 
      rel.fromNoteId !== id && rel.toNoteId !== id
    ));
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent, noteId: string) => {
    if (isCreatingRelationship) {
      if (!relationshipStart) {
        setRelationshipStart(noteId);
      } else if (relationshipStart !== noteId) {
        // Create relationship
        const newRelationship: Relationship = {
          id: crypto.randomUUID(),
          fromNoteId: relationshipStart,
          toNoteId: noteId,
        };
        setRelationships(prev => [...prev, newRelationship]);
        setRelationshipStart(null);
        setIsCreatingRelationship(false);
      }
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setDraggedNote(noteId);
  }, [isCreatingRelationship, relationshipStart]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!draggedNote || !boardRef.current) return;

    const boardRect = boardRef.current.getBoundingClientRect();
    const newPosition = {
      x: e.clientX - boardRect.left - dragOffset.x,
      y: e.clientY - boardRect.top - dragOffset.y,
    };

    setNotes(prev => prev.map(note =>
      note.id === draggedNote
        ? { ...note, position: newPosition }
        : note
    ));
  }, [draggedNote, dragOffset]);

  const handleMouseUp = useCallback(() => {
    setDraggedNote(null);
  }, []);

  const toggleRelationshipMode = useCallback(() => {
    setIsCreatingRelationship(prev => !prev);
    setRelationshipStart(null);
  }, []);

  const deleteRelationship = useCallback((relationshipId: string) => {
    setRelationships(prev => prev.filter(rel => rel.id !== relationshipId));
  }, []);

  const saveGraph = useCallback(() => {
    const graph: StoryGraph = { notes, relationships };
    console.log('Story Graph:', JSON.stringify(graph, null, 2));
    
    // Also save to localStorage for persistence
    localStorage.setItem('storyNotesGraph', JSON.stringify(graph));
    alert('Graph saved! Check console for details.');
  }, [notes, relationships]);

  const loadGraph = useCallback(() => {
    const saved = localStorage.getItem('storyNotesGraph');
    if (saved) {
      try {
        const graph: StoryGraph = JSON.parse(saved);
        setNotes(graph.notes || []);
        setRelationships(graph.relationships || []);
        alert('Graph loaded successfully!');
      } catch (error) {
        alert('Error loading graph');
      }
    } else {
      alert('No saved graph found');
    }
  }, []);

  const clearBoard = useCallback(() => {
    if (confirm('Are you sure you want to clear all notes and relationships?')) {
      setNotes([]);
      setRelationships([]);
    }
  }, []);

  const getNoteById = useCallback((id: string) => {
    return notes.find(note => note.id === id);
  }, [notes]);

  const renderRelationshipLine = useCallback((relationship: Relationship) => {
    const fromNote = getNoteById(relationship.fromNoteId);
    const toNote = getNoteById(relationship.toNoteId);
    
    if (!fromNote || !toNote) return null;

    const fromCenter = {
      x: fromNote.position.x + 100, // Note width / 2
      y: fromNote.position.y + 50,  // Note height / 2
    };
    
    const toCenter = {
      x: toNote.position.x + 100,
      y: toNote.position.y + 50,
    };

    return (
      <g key={relationship.id}>
        <line
          x1={fromCenter.x}
          y1={fromCenter.y}
          x2={toCenter.x}
          y2={toCenter.y}
          stroke="#666"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        <circle
          cx={(fromCenter.x + toCenter.x) / 2}
          cy={(fromCenter.y + toCenter.y) / 2}
          r="8"
          fill="#ff4444"
          className="relationship-delete"
          onClick={() => deleteRelationship(relationship.id)}
          style={{ cursor: 'pointer' }}
        />
        <text
          x={(fromCenter.x + toCenter.x) / 2}
          y={(fromCenter.y + toCenter.y) / 2 + 3}
          textAnchor="middle"
          fill="white"
          fontSize="10"
          style={{ pointerEvents: 'none' }}
        >
          ×
        </text>
      </g>
    );
  }, [getNoteById, deleteRelationship]);

  return (
    <div className="story-notes-container">
      <div className="story-notes-toolbar">
        <button onClick={addNote} className="toolbar-btn add-note">
          + Add Note
        </button>
        <button 
          onClick={toggleRelationshipMode} 
          className={`toolbar-btn ${isCreatingRelationship ? 'active' : ''}`}
        >
          {isCreatingRelationship ? 'Cancel Link' : '🔗 Link Notes'}
        </button>
        <button onClick={saveGraph} className="toolbar-btn save">
          💾 Save
        </button>
        <button onClick={loadGraph} className="toolbar-btn load">
          📁 Load
        </button>
        <button onClick={clearBoard} className="toolbar-btn clear">
          🗑️ Clear
        </button>
        <div className="toolbar-info">
          {isCreatingRelationship && (
            <span className="relationship-hint">
              {relationshipStart ? 'Click target note to create link' : 'Click first note to start linking'}
            </span>
          )}
        </div>
      </div>

      <div 
        ref={boardRef}
        className="story-notes-board"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* SVG for relationship lines */}
        <svg className="relationships-svg">
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="#666"
              />
            </marker>
          </defs>
          {relationships.map(renderRelationshipLine)}
        </svg>

        {/* Sticky Notes */}
        {notes.map(note => (
          <div
            key={note.id}
            className={`sticky-note ${draggedNote === note.id ? 'dragging' : ''} ${relationshipStart === note.id ? 'relationship-start' : ''}`}
            style={{
              left: note.position.x,
              top: note.position.y,
              backgroundColor: note.color,
            }}
            onMouseDown={(e) => handleMouseDown(e, note.id)}
          >
            <div className="sticky-note-header">
              <button
                className="delete-note"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteNote(note.id);
                }}
              >
                ×
              </button>
            </div>
            <div className="sticky-note-content">
              {editingNote === note.id ? (
                <textarea
                  value={note.text}
                  onChange={(e) => updateNoteText(note.id, e.target.value)}
                  onBlur={() => setEditingNote(null)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.ctrlKey) {
                      setEditingNote(null);
                    }
                  }}
                  autoFocus
                  className="note-textarea"
                />
              ) : (
                <div
                  className="note-text"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditingNote(note.id);
                  }}
                >
                  {note.text}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}