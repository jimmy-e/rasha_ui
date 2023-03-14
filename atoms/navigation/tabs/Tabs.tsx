import React, { useState, useMemo } from 'react';
import { EuiTabs, EuiTab } from '@elastic/eui';
import { BooleanSize, CommonProps } from '@ui/types';
import { Tab as ITab } from './Tabs.types';

export interface TabsProps extends CommonProps {
  initialTabId?: string;
  size?: BooleanSize;
  tabs: ITab[];
}

export const Tabs: React.FC<TabsProps> = ({
  'data-testid': dataTestId,
  initialTabId,
  size = 'l',
  tabs,
}) => {
  const [tabId, setTabId] = useState<string>(initialTabId || tabs[0].id);
  const selectedTabContent = useMemo(() => tabs.find((tab) => tab.id === tabId)?.content, [tabId]);

  return (
    <>
      <EuiTabs
        data-testid={dataTestId || 'ui-atom-navigation-tabs'}
        size={size === 'l' ? 'm' : 's'}
      >
        {tabs.map((tab, index) => (
          <EuiTab
            key={`${tab.id}-${index}`}
            data-testid={tab['data-testid'] || 'ui-atom-navigation-tab'}
            href={tab.href}
            onClick={(event) => {
              setTabId(tab.id);
              if (tab.onClick) {
                tab.onClick(event);
              }
            }}
            isSelected={tab.id === tabId}
          >
            {tab.label}
          </EuiTab>
        ))}
      </EuiTabs>
      {selectedTabContent}
    </>
  );
};
