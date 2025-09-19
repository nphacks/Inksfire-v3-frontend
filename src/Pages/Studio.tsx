import { TabView, TabPanel } from 'primereact/tabview';
import { Objects } from "./Subpages/Studio/Objects"
import { Testing } from "./Subpages/Studio/Testing"
import { Sets } from './Subpages/Studio/Sets';
import { Shotlist } from './Subpages/Studio/ShotList';

export const Studio = () => {
    return (
        <>
            <TabView>
                <TabPanel header="Sets"><Sets /></TabPanel>
                <TabPanel header="Shot List"><Shotlist /></TabPanel>
                <TabPanel header="Objects"><Objects /></TabPanel>
                <TabPanel header="Testing"><Testing /></TabPanel>
            </TabView>
        </>
    )
}