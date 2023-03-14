import React, { useState } from 'react';
import { ContextMenu, ContextMenuProps } from './ContextMenu';
import { ContextMenuPanel } from './ContextMenu.types';
import { Button } from '../../inputs/button/Button';

interface AnchorExampleProps {
  anchorPosition: ContextMenuProps['anchorPosition'];
}

export const AnchorExample: React.FC<AnchorExampleProps> = ({ anchorPosition }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const panel: ContextMenuPanel = {
    items: [
      { label: 'sample item 1', onClick: () => {} },
      { iconName: 'home', label: 'sample item 2', onClick: () => {} },
      { iconName: 'trash', label: 'sample item 3', onClick: () => {}, type: 'danger' },
    ],
  };

  return (
    <ContextMenu
      anchorPosition={anchorPosition}
      button={<Button label={anchorPosition} onClick={() => setOpenMenu(true)} />}
      onClose={() => setOpenMenu(false)}
      open={openMenu}
      panel={panel}
    />
  );
};

export const DefaultExample: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const panel: ContextMenuPanel = {
    items: [
      { label: 'sample item 1', onClick: () => {} },
      { label: 'sample item 2', onClick: () => {} },
      { label: 'sample item 3', onClick: () => {} },
    ],
  };

  return (
    <ContextMenu
      button={<Button label="Show context menu" onClick={() => setOpenMenu(true)} />}
      open={openMenu}
      onClose={() => setOpenMenu(false)}
      panel={panel}
    />
  );
};

export const DemoExample: React.FC<ContextMenuProps> = (props) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const panel: ContextMenuPanel = {
    items: [
      { label: 'sample item 1', onClick: () => {} },
      { iconName: 'home', label: 'sample item 2', onClick: () => {} },
      { iconName: 'trash', label: 'sample item 3', onClick: () => {}, type: 'danger' },
    ],
  };

  return (
    <ContextMenu
      button={<Button label="Show context menu" onClick={() => setOpenMenu(true)} />}
      onClose={() => setOpenMenu(false)}
      open={openMenu}
      panel={panel}
      {...props}
    />
  );
};

export const IconsExample: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const panel: ContextMenuPanel = {
    items: [
      { iconName: 'home', label: 'sample item 1', onClick: () => {} },
      { iconName: 'gear', label: 'sample item 2', onClick: () => {} },
      { iconName: 'mapPin', label: 'sample item 3', onClick: () => {} },
    ],
  };

  return (
    <ContextMenu
      button={<Button label="Show context menu" onClick={() => setOpenMenu(true)} />}
      onClose={() => setOpenMenu(false)}
      open={openMenu}
      panel={panel}
    />
  );
};

export const TitleExample: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const panel: ContextMenuPanel = {
    items: [
      { label: 'sample item 1', onClick: () => {} },
      { label: 'sample item 2', onClick: () => {} },
      { label: 'sample item 3', onClick: () => {} },
    ],
    title: 'Sample Title',
  };

  return (
    <ContextMenu
      button={<Button label="Show context menu" onClick={() => setOpenMenu(true)} />}
      onClose={() => setOpenMenu(false)}
      open={openMenu}
      panel={panel}
    />
  );
};

export const TypeExample: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const panel: ContextMenuPanel = {
    items: [
      { iconName: 'home', label: 'default', onClick: () => {} },
      { iconName: 'home', label: 'danger', onClick: () => {}, type: 'danger' },
    ],
  };

  return (
    <ContextMenu
      button={<Button label="Show context menu" onClick={() => setOpenMenu(true)} />}
      onClose={() => setOpenMenu(false)}
      open={openMenu}
      panel={panel}
    />
  );
};

export const MultiplePanelsExample: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const panel: ContextMenuPanel = {
    items: [
      { iconName: 'home', label: 'Home', onClick: () => {} },
      { iconName: 'users', label: 'Users', onClick: () => {} },
      {
        iconName: 'gear',
        label: 'Nested Panel',
        onClick: () => {},
        nestedPanel: {
          items: [
            { iconName: 'fileText', label: 'Files', onClick: () => {} },
            { iconName: 'image', label: 'Images', onClick: () => {} },
            { iconName: 'zipFile', label: 'Download Zip', onClick: () => {} },
          ],
          title: 'This is a sample title',
        },
      },
      {
        iconName: 'gear',
        label: 'Multiple Nested Panels',
        onClick: () => {},
        nestedPanel: {
          items: [
            { iconName: 'property', label: 'Buildings', onClick: () => {} },
            { iconName: 'construction', label: 'Construction', onClick: () => {} },
            { iconName: 'occupancy', label: 'Stores', onClick: () => {} },
            {
              iconName: 'map',
              label: 'Map',
              onClick: () => {},
              nestedPanel: {
                items: [
                  { iconName: 'mapPin', label: 'Current Location', onClick: () => {} },
                  { iconName: 'globe', label: 'View Map', onClick: () => {} },
                  { iconName: 'filter', label: 'Filter', onClick: () => {} },
                  { iconName: 'edit', label: 'Edit', onClick: () => {} },
                ],
                title: 'This is a sample title',
              },
            },
          ],
          title: 'This is a sample title',
        },
      },
    ],
  };

  return (
    <ContextMenu
      button={<Button label="Show context menu" onClick={() => setOpenMenu(true)} />}
      onClose={() => setOpenMenu(false)}
      open={openMenu}
      panel={panel}
    />
  );
};
