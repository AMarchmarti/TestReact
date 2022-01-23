import * as React from 'react';
import { PanelProps, TabProps } from '../../../pages/Home/Home.page';
import AppBar from '../../Molecules/AppBar/AppBar';
import Tab from '../../Atoms/Tab/Tab';
import Tabs from '../../Molecules/Tabs/Tabs';
import Panel from '../../Molecules/Panel/Panel';

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
						<Tab
							ariaControls={`tab-${index}`}
							icon={tab.icon}
							id={`tab-${index}`}
							key={index}
							label={tab.label}
						/>
					))}
				</Tabs>
			</AppBar>
			{panels.map((panel: PanelProps, index: number) => (
				<Panel value={value} key={index} index={index} id={`tab-panel-${index}`} role="tabpanel">
					{panel.component}
				</Panel>
			))}
		</>
	);
};

export default TabPanel;
