import * as React from 'react';
import { PanelProps, TabProps } from '../../../pages/Home/Home.page';
import AppBar from '../../Atoms/AppBar/AppBar';
import Tab from '../../Atoms/Tab/Tab';
import Tabs from '../../Atoms/Tabs/Tabs';
import Panel from '../../Atoms/Panel/Panel';

interface TabPanelProps {
	tabs: TabProps[];
	value: number;
	handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
	panels: PanelProps[];
}

const TabPanel = ({ tabs, panels, value, handleChange }: TabPanelProps): JSX.Element => {
	return (
		<>
			<AppBar position="static" color="secondary">
				<Tabs value={value} handleChange={handleChange} variant="fullWidth" aria-label="tab-panel">
					{tabs.map((tab: TabProps, index: number) => (
						<Tab label={tab.label} icon={tab.icon} id={`tab-${index}`} ariaControls={`tab-${index}`} />
					))}
				</Tabs>
			</AppBar>
			{panels.map((panel: PanelProps, index: number) => (
				<Panel value={value} index={index} id={`tab-panel-${index}`} role="tabpanel">
					{panel.component}
				</Panel>
			))}
		</>
	);
};

export default TabPanel;
