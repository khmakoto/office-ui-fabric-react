import * as React from 'react';
import { SplitButton } from '@fluentui/react-northstar';
import { FilesGifIcon, FilesIllustratorIcon, FilesPdfIcon, FilesPhotoshopIcon } from '@fluentui/react-icons-northstar';

const items = [
  {
    key: 'pdf',
    content: 'Export to PDF',
    icon: <FilesPdfIcon />,
  },
  {
    key: 'pds',
    content: 'Export to PDS',
    icon: <FilesPhotoshopIcon />,
  },
  {
    key: 'gif',
    content: 'Export as GIF',
    icon: <FilesGifIcon />,
    disabled: true,
  },
  {
    key: 'eps',
    content: 'Export to EPS',
    icon: <FilesIllustratorIcon />,
  },
];

const SplitButtonIconAndContentExampleShorthand = () => (
  <>
    <SplitButton
      menu={items}
      button={{
        content: items[0].content,
        key: items[0].key,
        icon: items[0].icon,
        'aria-roledescription': 'splitbutton',
        'aria-describedby': 'instruction-message-icon-content',
      }}
      onMainButtonClick={() => alert('button was clicked')}
      toggleButton={{ 'aria-label': 'more options' }}
    />
    <span aria-hidden="true" id="instruction-message-icon-content" style={{ opacity: 0 }}>
      to open menu, press Alt + Arrow Down
    </span>
  </>
);

export default SplitButtonIconAndContentExampleShorthand;
