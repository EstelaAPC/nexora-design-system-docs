import './style.css';
import '@nexora-ds/theme';
import '@nexora-ds/components/button';
import '@nexora-ds/components/input';
import '@nexora-ds/components/textarea';
import '@nexora-ds/components/checkbox';
import '@nexora-ds/components/radio';
import '@nexora-ds/components/switch';
import '@nexora-ds/components/select';
import '@nexora-ds/components/card';
import '@nexora-ds/components/badge';
import '@nexora-ds/components/alert';
import '@nexora-ds/components/spinner';
import '@nexora-ds/components/progress';
import '@nexora-ds/components/toast';
import '@nexora-ds/components/tabs';
import '@nexora-ds/components/breadcrumb';
import '@nexora-ds/components/pagination';
import '@nexora-ds/components/dialog';
import '@nexora-ds/components/tooltip';
import '@nexora-ds/components/popover';
import '@nexora-ds/components/table';
import '@nexora-ds/components/icon';
import '@nexora-ds/components/icon-button';

const navSections = [
  {
    label: 'GETTING STARTED',
    items: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'installation', label: 'Installation' },
      { id: 'usage', label: 'Usage' },
    ],
  },
  {
    label: 'FOUNDATIONS',
    items: [
      { id: 'design-tokens', label: 'Design Tokens' },
      { id: 'colors', label: 'Colors' },
      { id: 'typography', label: 'Typography' },
      { id: 'spacing', label: 'Spacing' },
      { id: 'themes', label: 'Themes' },
      { id: 'icons', label: 'Icons' },
      { id: 'accessibility', label: 'Accessibility' },
    ],
  },
  {
    label: 'COMPONENTS',
    items: [
      { id: 'button', label: 'Button' },
      { id: 'input', label: 'Input' },
      { id: 'textarea', label: 'Textarea' },
      { id: 'checkbox', label: 'Checkbox' },
      { id: 'radio', label: 'Radio' },
      { id: 'switch', label: 'Switch' },
      { id: 'select', label: 'Select' },
      { id: 'card', label: 'Card' },
      { id: 'badge', label: 'Badge' },
      { id: 'alert', label: 'Alert' },
      { id: 'spinner', label: 'Spinner' },
      { id: 'progress', label: 'Progress' },
      { id: 'toast', label: 'Toast' },
      { id: 'tabs', label: 'Tabs' },
      { id: 'breadcrumb', label: 'Breadcrumb' },
      { id: 'pagination', label: 'Pagination' },
      { id: 'dialog', label: 'Dialog' },
      { id: 'tooltip', label: 'Tooltip' },
      { id: 'popover', label: 'Popover' },
      { id: 'table', label: 'Table' },
      { id: 'icon', label: 'Icon' },
      { id: 'icon-button', label: 'Icon Button' },
    ],
  },
  {
    label: 'DEVELOPMENT',
    items: [
      { id: 'architecture', label: 'Architecture' },
      { id: 'form-integration', label: 'Form Integration' },
      { id: 'theming', label: 'Theming' },
      { id: 'accessibility', label: 'Accessibility' },
      { id: 'testing', label: 'Testing' },
    ],
  },
  {
    label: 'PACKAGE',
    items: [
      { id: 'npm', label: 'NPM' },
      { id: 'releases', label: 'Releases' },
    ],
  },
] as const;

const pageTitles: Record<string, string> = {
  introduction: 'Introduction',
  installation: 'Installation',
  usage: 'Usage',
  'design-tokens': 'Design Tokens',
  colors: 'Cores',
  typography: 'Tipografia',
  spacing: 'Espaçamento',
  themes: 'Themes',
  icons: 'Icons',
  accessibility: 'Accessibility',
  button: 'Button',
  input: 'Input',
  textarea: 'Textarea',
  checkbox: 'Checkbox',
  radio: 'Radio',
  switch: 'Switch',
  select: 'Select',
  card: 'Card',
  badge: 'Badge',
  alert: 'Alert',
  spinner: 'Spinner',
  progress: 'Progress',
  toast: 'Toast',
  tabs: 'Tabs',
  breadcrumb: 'Breadcrumb',
  pagination: 'Pagination',
  dialog: 'Dialog',
  tooltip: 'Tooltip',
  popover: 'Popover',
  table: 'Table',
  icon: 'Icon',
  'icon-button': 'Icon Button',
  architecture: 'Architecture',
  'form-integration': 'Form Integration',
  theming: 'Theming',
  testing: 'Testing',
  npm: 'NPM',
  releases: 'Releases',
};

const componentCatalog: Record<string, { title: string; description: string; props: Array<{ name: string; type: string; defaultValue: string; description: string }>; events: string[]; slots: string[]; accessibility: string; sampleCode: string; preview: string; }> = {
  button: {
    title: 'Button',
    description: 'Primary call-to-action controls that communicate intent clearly and keep actions predictable.',
    props: [
      { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'", defaultValue: 'primary', description: 'Sets the button visual treatment.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: 'md', description: 'Controls the button height and padding.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables click and form submission.' },
      { name: 'loading', type: 'boolean', defaultValue: 'false', description: 'Shows a loading state and prevents interactions.' },
      { name: 'fullWidth', type: 'boolean', defaultValue: 'false', description: 'Stretches the button to fill its container.' },
      { name: 'type', type: "'button' | 'submit' | 'reset'", defaultValue: 'button', description: 'Defines the native button behavior in forms.' },
    ],
    events: ['click'],
    slots: ['default'],
    accessibility: 'Labels are exposed through the native button element, disabled states are respected, and form actions trigger keyboard-safe interactions.',
    sampleCode: '<nx-button variant="primary">Continue</nx-button>',
    preview: '<div class="button-row" data-demo="button"></div>',
  },
  input: {
    title: 'Input',
    description: 'Single-line form control for text, email, password, and other user-entered values.',
    props: [
      { name: 'label', type: 'string', defaultValue: '""', description: 'Accessible label rendered for the field.' },
      { name: 'value', type: 'string', defaultValue: '""', description: 'Current field value.' },
      { name: 'type', type: 'string', defaultValue: '"text"', description: 'Native input type such as text, email, and password.' },
      { name: 'placeholder', type: 'string', defaultValue: '""', description: 'Hint text shown before the user interacts with the field.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables editing and form interaction.' },
      { name: 'required', type: 'boolean', defaultValue: 'false', description: 'Marks the field as required in native form validation.' },
      { name: 'error', type: 'string', defaultValue: '""', description: 'Shows an inline validation message.' },
      { name: 'helperText', type: 'string', defaultValue: '""', description: 'Additional help text beneath the field.' },
    ],
    events: ['nx-change'],
    slots: ['default'],
    accessibility: 'The control attempts to remain form-associated and exposes labels, hints, and validation states to assistive technologies.',
    sampleCode: '<nx-input label="Email" type="email" helper-text="We will only use this for updates"></nx-input>',
    preview: '<div class="input-stack" data-demo="input"></div>',
  },
  textarea: {
    title: 'Textarea',
    description: 'Flexible multi-line input for longer form responses and notes.',
    props: [
      { name: 'label', type: 'string', defaultValue: '""', description: 'Accessible label for the control.' },
      { name: 'value', type: 'string', defaultValue: '""', description: 'Current textarea content.' },
      { name: 'placeholder', type: 'string', defaultValue: '""', description: 'Prompt text inside the field.' },
      { name: 'rows', type: 'number', defaultValue: '4', description: 'Controls the visible height of the textarea.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Prevents editing.' },
      { name: 'required', type: 'boolean', defaultValue: 'false', description: 'Marks the field as required.' },
      { name: 'error', type: 'string', defaultValue: '""', description: 'Displays validation feedback.' },
      { name: 'helperText', type: 'string', defaultValue: '""', description: 'Supportive guidance for the field.' },
    ],
    events: ['nx-change'],
    slots: ['default'],
    accessibility: 'Supports labels, descriptions, and validation messaging while maintaining native keyboard editing behaviors.',
    sampleCode: '<nx-textarea label="Feedback" rows="5" helper-text="Share any details that will help us improve."></nx-textarea>',
    preview: '<div class="input-stack" data-demo="textarea"></div>',
  },
  checkbox: {
    title: 'Checkbox',
    description: 'Binary selection control used for optional preferences and consent.',
    props: [
      { name: 'label', type: 'string', defaultValue: '""', description: 'Visible text paired with the control.' },
      { name: 'checked', type: 'boolean', defaultValue: 'false', description: 'Controls whether the checkbox is selected.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables the field and prevents interaction.' },
      { name: 'required', type: 'boolean', defaultValue: 'false', description: 'Requires the field to be selected in a form.' },
      { name: 'indeterminate', type: 'boolean', defaultValue: 'false', description: 'Sets a mixed selection state when supported by the browser and component logic.' },
      { name: 'value', type: 'string', defaultValue: '"on"', description: 'Value submitted when the field is checked.' },
    ],
    events: ['nx-change'],
    slots: ['default'],
    accessibility: 'Uses native semantic form behavior and supports checked, disabled, and indeterminate states with focus styling.',
    sampleCode: '<nx-checkbox checked label="I agree to the terms"></nx-checkbox>',
    preview: '<div class="stacked-list" data-demo="checkbox"></div>',
  },
  radio: {
    title: 'Radio',
    description: 'Single-choice option for mutually exclusive selections in a group.',
    props: [
      { name: 'label', type: 'string', defaultValue: '""', description: 'Visible description for the option.' },
      { name: 'checked', type: 'boolean', defaultValue: 'false', description: 'Selected state for the option.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables the option.' },
      { name: 'required', type: 'boolean', defaultValue: 'false', description: 'Requires one option in the group to be selected.' },
      { name: 'value', type: 'string', defaultValue: '""', description: 'Submitted value for the selected option.' },
    ],
    events: ['nx-change'],
    slots: ['default'],
    accessibility: 'Radio groups maintain keyboard navigation and clear checked state semantics for assistive technology.',
    sampleCode: '<nx-radio checked name="plan" value="starter" label="Starter"></nx-radio>',
    preview: '<div class="stacked-list" data-demo="radio"></div>',
  },
  switch: {
    title: 'Switch',
    description: 'Compact toggle for quick enable/disable actions.',
    props: [
      { name: 'label', type: 'string', defaultValue: '""', description: 'Visible label for the toggle.' },
      { name: 'checked', type: 'boolean', defaultValue: 'false', description: 'Current on/off state.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables state changes.' },
      { name: 'required', type: 'boolean', defaultValue: 'false', description: 'Marks the control as required when submitted.' },
      { name: 'value', type: 'string', defaultValue: '"on"', description: 'Submitted value for the control.' },
    ],
    events: ['nx-change'],
    slots: ['default'],
    accessibility: 'Uses a native semantic toggle pattern with clear checked state and keyboard interaction.',
    sampleCode: '<nx-switch checked label="Enable notifications"></nx-switch>',
    preview: '<div class="stacked-list" data-demo="switch"></div>',
  },
  select: {
    title: 'Select',
    description: 'Drop-down selection control for enumerated values and lists.',
    props: [
      { name: 'label', type: 'string', defaultValue: '""', description: 'Visible label for the control.' },
      { name: 'value', type: 'string', defaultValue: '""', description: 'Selected option value.' },
      { name: 'placeholder', type: 'string', defaultValue: '""', description: 'Prompt displayed before a selection is made.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables interaction.' },
      { name: 'required', type: 'boolean', defaultValue: 'false', description: 'Marks the field as required.' },
      { name: 'error', type: 'string', defaultValue: '""', description: 'Shows inline validation feedback.' },
      { name: 'helpText', type: 'string', defaultValue: '""', description: 'Additional guidance beneath the field.' },
    ],
    events: ['nx-change'],
    slots: ['default'],
    accessibility: 'The component is form-associated and follows native select semantics with label, validation, and keyboard navigation support.',
    sampleCode: '<nx-select label="Region"><option value="na">North America</option><option value="eu">Europe</option></nx-select>',
    preview: '<div class="input-stack" data-demo="select"></div>',
  },
  card: {
    title: 'Card',
    description: 'Surface for grouping related content, metrics, and actions without overwhelming the layout.',
    props: [{ name: 'title', type: 'string', defaultValue: '""', description: 'Headline displayed atop the card.' }],
    events: [],
    slots: ['default'],
    accessibility: 'Uses semantic content structure and keeps visual emphasis consistent for low-vision and high-contrast users.',
    sampleCode: '<nx-card title="Product overview"><p>Key details about the release.</p></nx-card>',
    preview: '<div class="card-grid" data-demo="card"></div>',
  },
  badge: {
    title: 'Badge',
    description: 'Compact status indicators that help users identify importance, state, or category at a glance.',
    props: [{ name: 'tone', type: "'info' | 'success' | 'warning' | 'error' | string", defaultValue: 'info', description: 'Defines the badge color treatment.' }],
    events: [],
    slots: ['default'],
    accessibility: 'Provides a high-contrast label that remains readable and communicates semantic state without relying only on color.',
    sampleCode: '<nx-badge tone="success">Stable</nx-badge>',
    preview: '<div class="badge-row" data-demo="badge"></div>',
  },
  alert: {
    title: 'Alert',
    description: 'Inline message that draws attention to important information, warnings, or success states.',
    props: [
      { name: 'severity', type: "'info' | 'success' | 'warning' | 'error'", defaultValue: 'info', description: 'Semantic tone of the alert.' },
      { name: 'heading', type: 'string', defaultValue: '""', description: 'Optional heading displayed within the alert.' },
      { name: 'dismissible', type: 'boolean', defaultValue: 'false', description: 'Shows a dismiss action for transient alerts.' },
    ],
    events: ['nx-close'],
    slots: ['default'],
    accessibility: 'Color and icons are paired with textual content so the alert remains understandable for non-visual users.',
    sampleCode: '<nx-alert severity="warning" heading="Action required">Review the required fields before continuing.</nx-alert>',
    preview: '<div class="stacked-list" data-demo="alert"></div>',
  },
  spinner: {
    title: 'Spinner',
    description: 'Loading indicator to communicate progress and keep interactions clear while work is in flight.',
    props: [
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: 'md', description: 'Controls the size of the spinner.' },
      { name: 'label', type: 'string', defaultValue: '"Loading"', description: 'Accessible label announced to assistive technologies.' },
    ],
    events: [],
    slots: [],
    accessibility: 'Spinner labels provide a text equivalent and support screen-reader feedback for asynchronous states.',
    sampleCode: '<nx-spinner label="Loading content" size="md"></nx-spinner>',
    preview: '<div class="inline-row" data-demo="spinner"></div>',
  },
  progress: {
    title: 'Progress',
    description: 'Indicates how far a task has advanced and can be used for uploads, checklist completion, or steps.',
    props: [
      { name: 'value', type: 'number', defaultValue: '0', description: 'Current progress value.' },
      { name: 'max', type: 'number', defaultValue: '100', description: 'The maximum progress value for the current task.' },
      { name: 'label', type: 'string', defaultValue: '""', description: 'Accessible label for the progress bar.' },
    ],
    events: [],
    slots: [],
    accessibility: 'The bar exposes its current state and label to assistive tech while preserving keyboard-free progress indicators.',
    sampleCode: '<nx-progress value="70" max="100" label="Upload progress"></nx-progress>',
    preview: '<div class="stacked-list" data-demo="progress"></div>',
  },
  toast: {
    title: 'Toast',
    description: 'Transient feedback component for confirmations, warnings, and system updates.',
    props: [
      { name: 'open', type: 'boolean', defaultValue: 'false', description: 'Shows or hides the toast.' },
      { name: 'severity', type: "'info' | 'success' | 'warning' | 'error'", defaultValue: 'info', description: 'Semantic color treatment.' },
      { name: 'duration', type: 'number', defaultValue: '5000', description: 'How long the toast remains visible before dismissing.' },
      { name: 'dismissible', type: 'boolean', defaultValue: 'true', description: 'Shows a close affordance.' },
    ],
    events: ['nx-close'],
    slots: ['default'],
    accessibility: 'Toast content is displayed with clear state messaging and auto-dismiss timing is balanced with focus and pointer interactions.',
    sampleCode: '<nx-toast open severity="success" duration="4000">Changes saved successfully.</nx-toast>',
    preview: '<div class="stacked-list" data-demo="toast"></div>',
  },
  tabs: {
    title: 'Tabs',
    description: 'Navigation pattern for switching between related sections of content without leaving context.',
    props: [
      { name: 'selectedIndex', type: 'number', defaultValue: '0', description: 'Index of the active tab.' },
      { name: 'label', type: 'string', defaultValue: 'Tabs', description: 'Accessible label for the tablist.' },
    ],
    events: [],
    slots: ['tab', 'panel'],
    accessibility: 'Tabs use ARIA tab semantics, keyboard arrow navigation, and focus states for accessible switching.',
    sampleCode: '<nx-tabs><button slot="tab">Overview</button><div slot="panel">Content</div></nx-tabs>',
    preview: '<div class="stacked-list" data-demo="tabs"></div>',
  },
  breadcrumb: {
    title: 'Breadcrumb',
    description: 'Secondary navigation that shows the user where they are within a content hierarchy.',
    props: [
      { name: 'items', type: 'Array<{ label: string; href?: string }>', defaultValue: '[]', description: 'Breadcrumb trail items from root to current page.' },
      { name: 'label', type: 'string', defaultValue: 'Breadcrumb', description: 'Accessible label for the navigation region.' },
    ],
    events: [],
    slots: [],
    accessibility: 'Uses semantic navigation and current-page labeling to help screen readers understand the hierarchy.',
    sampleCode: '<nx-breadcrumb></nx-breadcrumb>',
    preview: '<div class="stacked-list" data-demo="breadcrumb"></div>',
  },
  pagination: {
    title: 'Pagination',
    description: 'Controls used to move through large sets of content or pages of results.',
    props: [
      { name: 'currentPage', type: 'number', defaultValue: '1', description: 'The current selected page.' },
      { name: 'totalPages', type: 'number', defaultValue: '1', description: 'Total number of pages available.' },
      { name: 'label', type: 'string', defaultValue: 'Pagination', description: 'Accessible label announced to assistive tech.' },
    ],
    events: ['nx-page-change'],
    slots: [],
    accessibility: 'Provides clear next and previous actions plus page buttons with accessible labels and current-page state.',
    sampleCode: '<nx-pagination current-page="3" total-pages="8"></nx-pagination>',
    preview: '<div class="stacked-list" data-demo="pagination"></div>',
  },
  dialog: {
    title: 'Dialog',
    description: 'Modal or non-modal overlay that focuses the user on an important task or configuration.',
    props: [
      { name: 'open', type: 'boolean', defaultValue: 'false', description: 'Controls whether the dialog is displayed.' },
      { name: 'modal', type: 'boolean', defaultValue: 'true', description: 'Uses modal presentation when supported by the browser.' },
      { name: 'title', type: 'string', defaultValue: 'Dialog', description: 'Displayed title for the dialog.' },
    ],
    events: ['nx-close'],
    slots: ['default'],
    accessibility: 'Uses the native dialog element, focus restoration, and accessible title semantics to support keyboard users.',
    sampleCode: '<nx-dialog open title="Confirm action">Would you like to continue?</nx-dialog>',
    preview: '<div class="stacked-list" data-demo="dialog"></div>',
  },
  tooltip: {
    title: 'Tooltip',
    description: 'Small contextual hint shown on hover or when focused to provide supplemental guidance.',
    props: [{ name: 'text', type: 'string', defaultValue: '""', description: 'Text shown in the tooltip.' }],
    events: [],
    slots: ['default'],
    accessibility: 'The tooltip is displayed on pointer and focus events, with text available to screen readers and keyboard users.',
    sampleCode: '<nx-tooltip text="Helpful context"><button type="button">Hover</button></nx-tooltip>',
    preview: '<div class="inline-row" data-demo="tooltip"></div>',
  },
  popover: {
    title: 'Popover',
    description: 'Container for contextual content or actions that appears near a trigger control.',
    props: [
      { name: 'open', type: 'boolean', defaultValue: 'false', description: 'Shows or hides the popover surface.' },
      { name: 'trigger', type: "'click' | 'manual'", defaultValue: 'click', description: 'Controls how the popover toggles.' },
      { name: 'placement', type: "'top' | 'right' | 'bottom' | 'left'", defaultValue: 'bottom', description: 'Where the popover is positioned relative to its trigger.' },
      { name: 'title', type: 'string', defaultValue: 'Popover', description: 'Heading displayed in the popover header.' },
    ],
    events: ['nx-close'],
    slots: ['default', 'trigger'],
    accessibility: 'The popover is anchored to a trigger, uses dialogs for semantics, and closes on outside pointer or Escape key input.',
    sampleCode: '<nx-popover title="Filters"><span slot="trigger">Open</span><p>Deliver more options here.</p></nx-popover>',
    preview: '<div class="inline-row" data-demo="popover"></div>',
  },
  table: {
    title: 'Table',
    description: 'Structured data view for rows and columns, optimized for readable, tabular content.',
    props: [
      { name: 'header', type: 'string', defaultValue: '""', description: 'Visible heading for the table.' },
      { name: 'columns', type: 'Array<{ key: string; header: string; rowHeader?: boolean }>', defaultValue: '[]', description: 'Column definitions used to render the grid.' },
      { name: 'rows', type: 'Array<Record<string, string | number | boolean | null | undefined>>', defaultValue: '[]', description: 'Data rows displayed in the table.' },
      { name: 'striped', type: 'boolean', defaultValue: 'false', description: 'Adds alternating row backgrounds.' },
      { name: 'hover', type: 'boolean', defaultValue: 'false', description: 'Emphasizes rows on pointer hover.' },
      { name: 'density', type: "'comfortable' | 'compact'", defaultValue: 'comfortable', description: 'Sets the vertical density of the rows.' },
    ],
    events: [],
    slots: [],
    accessibility: 'The table structure remains semantic, with clear column headers and row content suitable for screen readers and keyboard users.',
    sampleCode: '<nx-table header="Team"></nx-table>',
    preview: '<div class="stacked-list" data-demo="table"></div>',
  },
  icon: {
    title: 'Icon',
    description: 'Vector graphic used as a compact visual indicator inside content and controls.',
    props: [
      { name: 'name', type: "'check' | 'close' | 'plus' | 'minus' | 'chevron-down' | 'chevron-up' | 'arrow-left' | 'arrow-right' | 'info' | 'warning' | 'search'", defaultValue: '""', description: 'Identifies the icon to render.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: 'md', description: 'Sets the render size of the icon.' },
      { name: 'ariaLabel', type: 'string', defaultValue: '""', description: 'Accessible label if the icon is not purely decorative.' },
    ],
    events: [],
    slots: [],
    accessibility: 'Icons can be decorative or exposed with aria-label and title content to ensure they remain meaningful to assistive technology.',
    sampleCode: '<nx-icon name="search" size="md" aria-label="Search"></nx-icon>',
    preview: '<div class="icon-grid" data-demo="icon"></div>',
  },
  'icon-button': {
    title: 'Icon Button',
    description: 'Action trigger that uses an icon as the primary visual affordance, often for compact toolbars.',
    props: [
      { name: 'icon', type: "IconName | ''", defaultValue: '""', description: 'The icon used on the button.' },
      { name: 'ariaLabel', type: 'string', defaultValue: '""', description: 'Accessible label for the action.' },
      { name: 'variant', type: "'primary' | 'secondary' | 'ghost' | 'danger'", defaultValue: 'primary', description: 'Determines the visual treatment.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: 'md', description: 'Controls button dimensions.' },
      { name: 'type', type: "'button' | 'submit' | 'reset'", defaultValue: 'button', description: 'Native form button behavior.' },
    ],
    events: [],
    slots: [],
    accessibility: 'Maintains keyboard focus, native button semantics, and clear accessible names for actions in dense interfaces.',
    sampleCode: '<nx-icon-button icon="plus" aria-label="Add item" variant="primary"></nx-icon-button>',
    preview: '<div class="inline-row" data-demo="icon-button"></div>',
  },
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderCodeSample(code: string): string {
  return `
    <div class="code-block">
      <div class="code-toolbar">
        <span>HTML</span>
        <button type="button" class="copy-code" aria-label="Copiar exemplo de código">
          <span aria-hidden="true">▢</span>
          <span class="copy-code-label">Copiar código</span>
        </button>
      </div>
      <pre><code>${escapeHtml(code)}</code></pre>
      <span class="copy-status" aria-live="polite"></span>
    </div>
  `;
}

function renderPageHeader(title: string, description: string): string {
  return `
    <header class="page-header">
      <span class="eyebrow">Nexora documentation</span>
      <h1>${title}</h1>
      <p>${description}</p>
    </header>
  `;
}

function renderGenericPage(title: string, description: string, sections: Array<{ heading: string; body: string }>): string {
  const sectionContent = sections
    .map(
      (section) => `
        <section class="content-section">
          <h2>${section.heading}</h2>
          <div class="section-body">${section.body}</div>
        </section>
      `,
    )
    .join('');

  return `
    ${renderPageHeader(title, description)}
    ${sectionContent}
  `;
}

function renderIntroPage(): string {
  return `
    <header class="page-header home-hero-header">
      <span class="eyebrow">DESIGN SYSTEM · WEB COMPONENTS</span>
      <h1>NEXORA</h1>
      <p>Componentes consistentes para criar experiências digitais acessíveis e modernas.</p>
    </header>

    <section class="hero-section home-hero">
      <div class="hero-copy">
        <div class="pill-row home-pills">
          <span class="pill">Web Components</span>
          <span class="pill">Tokens</span>
          <span class="pill">Temas</span>
          <span class="pill">Acessibilidade</span>
        </div>
        <h2 class="home-title">Uma base. Muitas possibilidades.</h2>
        <p class="home-subtitle">Explore componentes, veja exemplos e copie o código para começar.</p>
        <div class="hero-actions">
          <a href="#installation" class="action primary">Começar a usar <span aria-hidden="true">→</span></a>
          <a href="#button" class="action secondary">Explorar componentes</a>
        </div>
      </div>

      <div class="hero-showcase home-showcase" data-theme="light">
        <div class="showcase-top">
          <nx-badge tone="info">Nexora UI</nx-badge>
          <nx-badge tone="success">Em evolução</nx-badge>
        </div>
        <div class="showcase-buttons">
          <nx-button variant="primary">Ação principal</nx-button>
          <nx-button variant="secondary">Secundária</nx-button>
        </div>
        <div class="showcase-grid home-showcase-grid">
          <nx-input label="Seu espaço" value="nexora.design" type="text"></nx-input>
          <nx-card title="Feito para interfaces">
            <p>Peças reutilizáveis, prontas para compor experiências reais.</p>
          </nx-card>
        </div>
      </div>
    </section>

    <section class="feature-grid home-feature-grid">
      <article class="stat-card home-feature-card">
        <span class="home-feature-icon" aria-hidden="true">✳</span>
        <div><span class="mini-kicker">01 · CONSTRUIR</span><h3>Componentes</h3></div>
        <p>Prontos para usar e combinar.</p>
      </article>
      <article class="stat-card home-feature-card">
        <span class="home-feature-icon" aria-hidden="true">◈</span>
        <div><span class="mini-kicker">02 · PERSONALIZAR</span><h3>Tokens & temas</h3></div>
        <p>Uma linguagem visual consistente.</p>
      </article>
      <article class="stat-card home-feature-card">
        <span class="home-feature-icon" aria-hidden="true">◎</span>
        <div><span class="mini-kicker">03 · INCLUIR</span><h3>Acessibilidade</h3></div>
        <p>Experiências melhores para todos.</p>
      </article>
      <article class="stat-card home-feature-card">
        <span class="home-feature-icon" aria-hidden="true">⌘</span>
        <div><span class="mini-kicker">04 · INTEGRAR</span><h3>Framework agnóstico</h3></div>
        <p>Web Components para qualquer stack.</p>
      </article>
    </section>

    <section class="content-section home-overview">
      <div class="section-heading-row">
        <div><span class="eyebrow">BIBLIOTECA</span><h2>Encontre o que precisa</h2></div>
        <a class="text-link" href="#button">Ver todos <span aria-hidden="true">→</span></a>
      </div>
      <div class="component-preview-grid">
        <a class="component-tile component-tile-link" href="#button">
          <span class="component-tile-icon" aria-hidden="true">↗</span>
          <span>Botões</span>
          <span class="tile-preview"><i></i><i></i></span>
          <span class="tile-footer">Ações e estados <span aria-hidden="true">→</span></span>
        </a>
        <a class="component-tile component-tile-link" href="#input">
          <span class="component-tile-icon" aria-hidden="true">⌗</span>
          <span>Formulários</span>
          <span class="tile-preview tile-preview-fields"><i></i><i></i><i></i></span>
          <span class="tile-footer">Campos e seleção <span aria-hidden="true">→</span></span>
        </a>
        <a class="component-tile component-tile-link" href="#card">
          <span class="component-tile-icon" aria-hidden="true">▱</span>
          <span>Cards</span>
          <span class="tile-preview tile-preview-card"><i></i><i></i></span>
          <span class="tile-footer">Conteúdo em contexto <span aria-hidden="true">→</span></span>
        </a>
        <a class="component-tile component-tile-link" href="#alert">
          <span class="component-tile-icon" aria-hidden="true">◉</span>
          <span>Feedback</span>
          <span class="tile-preview tile-preview-feedback"><i></i><i></i></span>
          <span class="tile-footer">Alertas e notificações <span aria-hidden="true">→</span></span>
        </a>
      </div>
    </section>

    <section class="content-section home-author-section">
      <div class="author-copy">
        <span class="eyebrow">Sobre o projeto</span>
        <h2>Feito por Estela Argolo Paraíso Carvalho</h2>
        <p>Estudo independente criado por uma Engenheira da Computação. Publicado, funcional e sempre em evolução.</p>
      </div>
      <div class="author-contact">
        <span class="mini-kicker">VAMOS CONVERSAR</span>
        <h3>Entre em contato pelo meu e-mail</h3>
        <a class="contact-link" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=estela.argolo@gmail.com" target="_blank" rel="noreferrer" aria-label="Escrever para estela.argolo@gmail.com no Gmail">estela.argolo@gmail.com <span aria-hidden="true">↗</span></a>
        <a class="portfolio-link" href="https://estelaapc.github.io/portfolio/" target="_blank" rel="noreferrer">Estela Argolo | Software Developer <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  `;
}

function renderInstallPage(): string {
  return renderGenericPage('Installation', 'Install the published Nexora packages and start composing accessible Web Components in any framework-agnostic application.', [
    {
      heading: 'Package installation',
      body: `
        <div class="code-stack">
          ${renderCodeSample('npm install @nexora-ds/components')}
          ${renderCodeSample('npm install @nexora-ds/theme')}
          ${renderCodeSample('npm install @nexora-ds/icons')}
        </div>
      `,
    },
    {
      heading: 'Import the components',
      body: `
        ${renderCodeSample("import '@nexora-ds/components/button';\nimport '@nexora-ds/components/input';")}
        <p>These components are Custom Elements. Once registered, they can be used directly in HTML.</p>
        ${renderCodeSample('<nx-button variant="primary">Continue</nx-button>')}
      `,
    },
    {
      heading: 'Usage example',
      body: `
        <div class="demo-surface" data-theme="light">
          <form class="inline-form">
            <nx-input label="Email" type="email" placeholder="you@example.com"></nx-input>
            <nx-button type="submit" variant="primary">Continue</nx-button>
          </form>
        </div>
      `,
    },
  ]);
}

function renderUsagePage(): string {
  return renderGenericPage('Usage', 'Use the published components the same way you would for any standard HTML document or framework-agnostic front-end.', [
    {
      heading: 'Quick start',
      body: `
        ${renderCodeSample("import '@nexora-ds/components/button';\nimport '@nexora-ds/components/card';\n\nconst card = document.createElement('nx-card');\ncard.title = 'Overview';\n")}
      `,
    },
    {
      heading: 'Real example',
      body: `
        <div class="demo-surface" data-theme="light">
          <nx-card title="Project overview">
            <p>Design systems should make product work faster, clearer and more consistent.</p>
            <div class="button-row">
              <nx-button variant="primary">Launch</nx-button>
              <nx-button variant="secondary">Preview</nx-button>
            </div>
          </nx-card>
        </div>
      `,
    },
  ]);
}

function renderDesignTokensPage(): string {
  return renderGenericPage('Design Tokens', 'Nexora exposes design primitives and semantic design decisions through tokens that can be consumed by applications and components.', [
    {
      heading: 'Primitive tokens',
      body: `
        <div class="token-grid">
          <div class="token-card"><span class="swatch swatch-blue"></span><strong>Blue 600</strong><small>#4F46E5</small><span>Primary action color</span></div>
          <div class="token-card"><span class="swatch swatch-gray"></span><strong>Gray 900</strong><small>#0F172A</small><span>Strong text</span></div>
          <div class="token-card"><span class="swatch swatch-green"></span><strong>Green 600</strong><small>#059669</small><span>Success states</span></div>
          <div class="token-card"><span class="swatch swatch-red"></span><strong>Red 600</strong><small>#DC2626</small><span>Destructive actions</span></div>
        </div>
      `,
    },
    {
      heading: 'Semantic tokens',
      body: `
        <ul class="semantic-list">
          <li><strong>Background:</strong> <code>--nx-color-background</code></li>
          <li><strong>Foreground:</strong> <code>--nx-color-text-primary</code></li>
          <li><strong>Border:</strong> <code>--nx-color-border</code></li>
          <li><strong>Primary:</strong> <code>--nx-color-primary</code></li>
          <li><strong>Destructive:</strong> <code>--nx-color-error</code></li>
          <li><strong>Success:</strong> <code>--nx-color-success</code></li>
          <li><strong>Warning:</strong> <code>--nx-color-warning</code></li>
          <li><strong>Info:</strong> <code>--nx-color-info</code></li>
        </ul>
      `,
    },
  ]);
}

function renderColorsPage(): string {
  return renderGenericPage('Cores', 'Use as cores primitivas e semânticas do Nexora para manter contraste, significado e consistência entre temas.', [
    {
      heading: 'Paleta primitiva',
      body: `
        <div class="foundation-color-grid">
          <article class="foundation-color-card"><span class="foundation-color-swatch" style="--swatch:#4f46e5"></span><div><strong>Azul 600</strong><code>#4F46E5</code><small>--nx-blue-600 · Ação primária</small></div></article>
          <article class="foundation-color-card"><span class="foundation-color-swatch" style="--swatch:#0f172a"></span><div><strong>Cinza 900</strong><code>#0F172A</code><small>--nx-gray-900 · Texto forte</small></div></article>
          <article class="foundation-color-card"><span class="foundation-color-swatch" style="--swatch:#059669"></span><div><strong>Verde 600</strong><code>#059669</code><small>--nx-green-600 · Sucesso</small></div></article>
          <article class="foundation-color-card"><span class="foundation-color-swatch" style="--swatch:#d97706"></span><div><strong>Âmbar 600</strong><code>#D97706</code><small>--nx-amber-600 · Atenção</small></div></article>
          <article class="foundation-color-card"><span class="foundation-color-swatch" style="--swatch:#dc2626"></span><div><strong>Vermelho 600</strong><code>#DC2626</code><small>--nx-red-600 · Erro</small></div></article>
          <article class="foundation-color-card"><span class="foundation-color-swatch" style="--swatch:#f8fafc"></span><div><strong>Cinza 50</strong><code>#F8FAFC</code><small>--nx-gray-50 · Fundo claro</small></div></article>
        </div>
      `,
    },
    {
      heading: 'Cores semânticas',
      body: `
        <p>Prefira tokens semânticos nas interfaces: eles se adaptam aos temas sem prender o componente a uma cor específica.</p>
        <div class="semantic-color-list">
          <div><span class="semantic-color-dot" style="--swatch:#4f46e5"></span><span><strong>Primária</strong><code>--nx-color-primary</code></span></div>
          <div><span class="semantic-color-dot" style="--swatch:#0f172a"></span><span><strong>Texto principal</strong><code>--nx-color-text-primary</code></span></div>
          <div><span class="semantic-color-dot" style="--swatch:#cbd5e1"></span><span><strong>Borda</strong><code>--nx-color-border</code></span></div>
          <div><span class="semantic-color-dot" style="--swatch:#dc2626"></span><span><strong>Erro</strong><code>--nx-color-error</code></span></div>
        </div>
        ${renderCodeSample(".action { color: var(--nx-color-on-primary);\n  background: var(--nx-color-primary);\n}\n.panel { background: var(--nx-color-surface); }")}
      `,
    },
    {
      heading: 'Uso responsável',
      body: `
        <div class="foundation-callout"><span aria-hidden="true">◉</span><p>Não dependa apenas da cor para indicar estado. Combine-a com texto, ícone ou outra pista visual e valide o contraste do conteúdo.</p></div>
      `,
    },
  ]);
}

function renderTypographyPage(): string {
  return renderGenericPage('Tipografia', 'A escala tipográfica do Nexora oferece tamanhos, pesos e famílias consistentes para criar hierarquia e leitura confortável.', [
    {
      heading: 'Famílias tipográficas',
      body: `
        <div class="type-family-grid">
          <article class="type-family-card"><span>Interface</span><strong style="font-family:var(--nx-font-family-sans)">Aa Bb Cc 123</strong><code>--nx-font-family-sans</code><small>Inter, Segoe UI, sans-serif</small></article>
          <article class="type-family-card"><span>Código</span><strong style="font-family:var(--nx-font-family-mono)">Aa Bb Cc 123</strong><code>--nx-font-family-mono</code><small>JetBrains Mono, monospace</small></article>
        </div>
      `,
    },
    {
      heading: 'Tamanhos e pesos',
      body: `
        <div class="type-specimen-list">
          <div><code>--nx-font-size-lg · 1.125rem</code><span style="font-size:var(--nx-font-size-lg)">Texto de destaque</span></div>
          <div><code>--nx-font-size-md · 1rem</code><span style="font-size:var(--nx-font-size-md)">Texto de interface padrão</span></div>
          <div><code>--nx-font-size-sm · 0.875rem</code><span style="font-size:var(--nx-font-size-sm)">Texto auxiliar e descrições</span></div>
          <div><code>--nx-font-size-xs · 0.75rem</code><span style="font-size:var(--nx-font-size-xs)">Rótulos compactos</span></div>
        </div>
        <div class="type-weight-row">
          <span style="font-weight:var(--nx-font-weight-regular)">Regular 400</span>
          <span style="font-weight:var(--nx-font-weight-medium)">Medium 500</span>
          <span style="font-weight:var(--nx-font-weight-semibold)">Semibold 600</span>
          <span style="font-weight:var(--nx-font-weight-bold)">Bold 700</span>
        </div>
      `,
    },
    {
      heading: 'Aplicação',
      body: `
        <div class="type-hierarchy-preview"><span class="mini-kicker">HIERARQUIA</span><h3>Título de seção</h3><p>Use tamanho e peso para orientar a leitura, não para competir com o conteúdo.</p><small>Texto auxiliar · --nx-font-size-sm</small></div>
        ${renderCodeSample("body {\n  font-family: var(--nx-font-family-sans);\n  font-size: var(--nx-font-size-md);\n}\n.caption { font-size: var(--nx-font-size-sm); }")}
      `,
    },
  ]);
}

function renderSpacingPage(): string {
  const spacingTokens = [
    { token: '--nx-spacing-1', value: '0.25rem', pixels: '4px' },
    { token: '--nx-spacing-2', value: '0.5rem', pixels: '8px' },
    { token: '--nx-spacing-3', value: '0.75rem', pixels: '12px' },
    { token: '--nx-spacing-4', value: '1rem', pixels: '16px' },
    { token: '--nx-spacing-5', value: '1.25rem', pixels: '20px' },
    { token: '--nx-spacing-6', value: '1.5rem', pixels: '24px' },
    { token: '--nx-spacing-8', value: '2rem', pixels: '32px' },
  ];
  const spacingMarkup = spacingTokens.map((spacing) => `
    <div class="spacing-scale-row">
      <code>${spacing.token}</code>
      <span class="spacing-track"><i style="width:${spacing.value}"></i></span>
      <strong>${spacing.pixels}</strong>
    </div>
  `).join('');

  return renderGenericPage('Espaçamento', 'Uma escala previsível ajuda a criar ritmo, alinhamento e respiro entre elementos e seções.', [
    {
      heading: 'Escala de espaçamento',
      body: `<div class="spacing-scale">${spacingMarkup}</div>`,
    },
    {
      heading: 'Ritmo na interface',
      body: `
        <div class="spacing-example-grid">
          <article><span>Compacto</span><div style="gap:var(--nx-spacing-2)"><i></i><i></i><i></i></div><code>gap: var(--nx-spacing-2)</code></article>
          <article><span>Confortável</span><div style="gap:var(--nx-spacing-4)"><i></i><i></i><i></i></div><code>gap: var(--nx-spacing-4)</code></article>
          <article><span>Seções</span><div style="gap:var(--nx-spacing-8)"><i></i><i></i><i></i></div><code>gap: var(--nx-spacing-8)</code></article>
        </div>
      `,
    },
    {
      heading: 'Exemplo',
      body: `${renderCodeSample(".form-stack {\n  display: grid;\n  gap: var(--nx-spacing-4);\n}\n.section { padding-block: var(--nx-spacing-8); }")}`,
    },
  ]);
}

function renderThemePage(): string {
  return renderGenericPage('Themes', 'The published theme package uses the real data-theme contract exposed by the design tokens package.', [
    {
      heading: 'Light theme',
      body: `
        <div class="demo-surface" data-theme="light">
          <nx-card title="Light theme">
            <p>Ideal for office, daylight, and product surfaces with less contrast.</p>
          </nx-card>
        </div>
      `,
    },
    {
      heading: 'Dark theme',
      body: `
        <div class="demo-surface" data-theme="dark">
          <nx-card title="Dark theme">
            <p>Optimized for night viewing and presentation-heavy interfaces.</p>
          </nx-card>
        </div>
      `,
    },
    {
      heading: 'Theme API',
      body: `${renderCodeSample("document.documentElement.setAttribute('data-theme', 'dark');\n// or\n<body data-theme='light'></body>")}`,
    },
  ]);
}

function renderIconsPage(): string {
  return renderGenericPage('Icons', 'Icons in the package are available through the published @nexora-ds/icons package and can be rendered by the web component wrapper.', [
    {
      heading: 'Available icons',
      body: `
        <div class="icon-grid large-grid">
          <div class="icon-card"><nx-icon name="check" size="lg"></nx-icon><span>check</span></div>
          <div class="icon-card"><nx-icon name="close" size="lg"></nx-icon><span>close</span></div>
          <div class="icon-card"><nx-icon name="plus" size="lg"></nx-icon><span>plus</span></div>
          <div class="icon-card"><nx-icon name="minus" size="lg"></nx-icon><span>minus</span></div>
          <div class="icon-card"><nx-icon name="chevron-down" size="lg"></nx-icon><span>chevron-down</span></div>
          <div class="icon-card"><nx-icon name="chevron-up" size="lg"></nx-icon><span>chevron-up</span></div>
          <div class="icon-card"><nx-icon name="arrow-left" size="lg"></nx-icon><span>arrow-left</span></div>
          <div class="icon-card"><nx-icon name="arrow-right" size="lg"></nx-icon><span>arrow-right</span></div>
          <div class="icon-card"><nx-icon name="info" size="lg"></nx-icon><span>info</span></div>
          <div class="icon-card"><nx-icon name="warning" size="lg"></nx-icon><span>warning</span></div>
          <div class="icon-card"><nx-icon name="search" size="lg"></nx-icon><span>search</span></div>
        </div>
      `,
    },
    {
      heading: 'Usage',
      body: `${renderCodeSample('<nx-icon name="search" size="md" aria-label="Search"></nx-icon>\n<nx-icon-button icon="search" aria-label="Search"></nx-icon-button>')}`,
    },
  ]);
}

function renderAccessibilityPage(): string {
  return renderGenericPage('Accessibility', 'Nexora follows semantic, keyboard-first and form-aware patterns that reinforce inclusive product interfaces.', [
    {
      heading: 'Core principles',
      body: `
        <ul class="semantic-list">
          <li>Semantic HTML is used whenever the browser API supports it.</li>
          <li>Keyboard navigation is preserved for tab, arrow and focus interactions.</li>
          <li>Form controls expose labels, required states and validation feedback.</li>
          <li>Shadow DOM is combined with accessible names and programmatic hints.</li>
          <li>WCAG principles guide contrast, focus appearance and readable spacing.</li>
        </ul>
      `,
    },
    {
      heading: 'Practical example',
      body: `
        <div class="demo-surface" data-theme="light">
          <form class="inline-form">
            <nx-input label="Email" type="email" required helper-text="Required for access to the dashboard"></nx-input>
            <nx-button type="submit" variant="primary">Submit</nx-button>
          </form>
        </div>
      `,
    },
  ]);
}

function renderArchitecturePage(): string {
  return renderGenericPage('Architecture', 'The design system is structured as a layered stack built around tokens, theme, icons and web components.', [
    {
      heading: 'System layers',
      body: `
        <div class="architecture-list">
          <span>Design Tokens</span>
          <span>↓</span>
          <span>Theme</span>
          <span>↓</span>
          <span>Icons</span>
          <span>↓</span>
          <span>Components</span>
          <span>↓</span>
          <span>Consumer application</span>
        </div>
      `,
    },
    {
      heading: 'Key characteristics',
      body: `
        <ul class="semantic-list">
          <li>Web Components provide framework-agnostic primitives.</li>
          <li>Lit powers rendering and expression of component state.</li>
          <li>Shadow DOM keeps component styles encapsulated.</li>
          <li>Custom Elements register and integrate with HTML documents.</li>
          <li>CSS custom properties make the system themable and easy to extend.</li>
        </ul>
      `,
    },
  ]);
}

function renderFormIntegrationPage(): string {
  return renderGenericPage('Form Integration', 'The published form components integrate with native HTML forms and support common browser APIs when available.', [
    {
      heading: 'Native form behavior',
      body: `${renderCodeSample("<form>\n  <nx-input name='email' label='Email' required></nx-input>\n  <nx-button type='submit'>Enviar</nx-button>\n</form>")}`,
    },
    {
      heading: 'Supported patterns',
      body: `
        <ul class="semantic-list">
          <li>ElementInternals is used where supported by the browser.</li>
          <li>FormData can collect values from form-associated controls.</li>
          <li>Required, disabled and reset interactions work with native HTML forms.</li>
          <li>Fieldsets and labels remain the documented pattern for grouped form content.</li>
        </ul>
      `,
    },
  ]);
}

function renderNpmPage(): string {
  return renderGenericPage('NPM Packages', 'The published design system is distributed as a set of small packages that can be installed independently.', [
    {
      heading: 'Published packages',
      body: `
        <ul class="package-list">
          <li><strong>@nexora-ds/design-tokens</strong> — 0.1.0</li>
          <li><strong>@nexora-ds/icons</strong> — 0.1.0</li>
          <li><strong>@nexora-ds/theme</strong> — 0.1.0</li>
          <li><strong>@nexora-ds/components</strong> — 0.1.0</li>
        </ul>
      `,
    },
    {
      heading: 'Install commands',
      body: `
        ${renderCodeSample('npm install @nexora-ds/components@0.1.0\nnpm install @nexora-ds/theme@0.1.0\nnpm install @nexora-ds/icons@0.1.0\nnpm install @nexora-ds/design-tokens@0.1.0')}
      `,
    },
  ]);
}

function renderReleasesPage(): string {
  return renderGenericPage('Releases', 'Nexora keeps published package versions aligned with the design system release cadence.', [
    {
      heading: 'Current release',
      body: `<p>Version <strong>0.1.0</strong> is the current published package set for the documentation site.</p>`,
    },
    {
      heading: 'Release notes',
      body: `
        <ul class="semantic-list">
          <li>Initial release of the published component package.</li>
          <li>Theme and design token primitives introduced for consistent styling.</li>
          <li>Core icon set and accessible form inputs included from the first package version.</li>
        </ul>
      `,
    },
  ]);
}

function renderTestingPage(): string {
  return renderGenericPage('Testing', 'Testing is a key part of design system quality and should cover semantics, visual integrity and component regression scenarios.', [
    {
      heading: 'Recommended coverage',
      body: `
        <ul class="semantic-list">
          <li>Keyboard interaction checks for all interactive controls.</li>
          <li>Form validation and required states for inputs, radios and switches.</li>
          <li>Theme toggling for light and dark mode exposures.</li>
          <li>Visual regression snapshots for component density and responsive layouts.</li>
        </ul>
      `,
    },
  ]);
}

function getComponentUsageText(componentId: string): string {
  const usageMap: Record<string, string> = {
    button: 'Use buttons to trigger primary actions, final confirmations, or major changes in the user flow.',
    input: 'Use inputs for short user responses such as names, email addresses, passwords, and value entry.',
    textarea: 'Use textareas for longer free-form content like notes, comments, summaries, and product feedback.',
    checkbox: 'Use checkboxes for optional or multi-selection decisions where the user can choose more than one option.',
    radio: 'Use radio groups when only one option should be selected from a short list of related choices.',
    switch: 'Use switches to toggle a preference or state that immediately affects the user experience.',
    select: 'Use selects when the user needs to choose one option from a defined list in a compact layout.',
    card: 'Use cards to group related content, summaries, feature highlights, or content blocks with a shared purpose.',
    badge: 'Use badges to label status, category, or contextual metadata in a compact and readable format.',
    alert: 'Use alerts to surface critical context, warnings, confirmations, or guidance without interrupting the flow too aggressively.',
    spinner: 'Use spinners while the app is waiting for content, network work, or delayed interactions to finish.',
    progress: 'Use progress bars to show the current completion status of a task with a clear range.',
    toast: 'Use toasts for ephemeral confirmations or non-blocking notifications after a user action.',
    tabs: 'Use tabs when content is closely related but needs clear separation into distinct sections.',
    breadcrumb: 'Use breadcrumbs to orient the user within a deep hierarchy or multi-step navigation experience.',
    pagination: 'Use pagination when long lists, search results, or tables should be broken into manageable pages.',
    dialog: 'Use dialogs for confirmations, destructive actions, or focused tasks that demand user attention.',
    tooltip: 'Use tooltips to explain ambiguous controls, actions, or microcopy without adding visual clutter.',
    popover: 'Use popovers for contextual panels, quick actions, filters, or lightweight content without leaving the page.',
    table: 'Use tables for structured data comparison, reporting, and dense information scanning across rows and columns.',
    icon: 'Use icons to reinforce actions, status, or categories with clear visual shorthand.',
    'icon-button': 'Use icon buttons for compact, repeated actions in toolbars, cards, and management interfaces.',
  };

  return usageMap[componentId] ?? 'Use this component to create a clearer, more consistent interaction pattern within the product experience.';
}

function getComponentTokens(componentId: string): string[] {
  const tokenMap: Record<string, string[]> = {
    button: ['--nx-color-primary', '--nx-color-surface', '--nx-color-border', '--nx-radius-md'],
    input: ['--nx-color-surface', '--nx-color-border', '--nx-color-text-primary', '--nx-font-size-body'],
    textarea: ['--nx-color-surface', '--nx-color-border', '--nx-color-text-secondary', '--nx-spacing-3'],
    checkbox: ['--nx-color-primary', '--nx-color-background', '--nx-color-border', '--nx-focus-ring'],
    radio: ['--nx-color-primary', '--nx-color-background', '--nx-color-border', '--nx-focus-ring'],
    switch: ['--nx-color-primary', '--nx-color-disabled', '--nx-color-border', '--nx-radius-full'],
    select: ['--nx-color-surface', '--nx-color-border', '--nx-color-text-primary', '--nx-shadow-sm'],
    card: ['--nx-color-surface', '--nx-color-border', '--nx-color-background', '--nx-radius-lg'],
    badge: ['--nx-color-primary', '--nx-color-success', '--nx-color-warning', '--nx-color-error'],
    alert: ['--nx-color-info', '--nx-color-success', '--nx-color-warning', '--nx-color-error'],
    spinner: ['--nx-color-primary', '--nx-color-text-secondary', '--nx-duration-fast', '--nx-size-md'],
    progress: ['--nx-color-primary', '--nx-color-background', '--nx-color-border', '--nx-radius-full'],
    toast: ['--nx-color-surface', '--nx-color-text-primary', '--nx-shadow-lg', '--nx-spacing-4'],
    tabs: ['--nx-color-surface', '--nx-color-border', '--nx-color-text-primary', '--nx-font-size-label'],
    breadcrumb: ['--nx-color-text-secondary', '--nx-color-text-primary', '--nx-spacing-2', '--nx-font-size-sm'],
    pagination: ['--nx-color-primary', '--nx-color-surface', '--nx-color-border', '--nx-radius-md'],
    dialog: ['--nx-color-surface', '--nx-color-overlay', '--nx-color-text-primary', '--nx-shadow-xl'],
    tooltip: ['--nx-color-surface', '--nx-color-text-primary', '--nx-color-border', '--nx-shadow-md'],
    popover: ['--nx-color-surface', '--nx-color-border', '--nx-color-text-primary', '--nx-shadow-lg'],
    table: ['--nx-color-surface', '--nx-color-border', '--nx-color-text-primary', '--nx-font-size-body'],
    icon: ['--nx-color-text-primary', '--nx-color-text-secondary', '--nx-size-icon', '--nx-font-size-sm'],
    'icon-button': ['--nx-color-primary', '--nx-color-surface', '--nx-color-border', '--nx-radius-md'],
  };

  return tokenMap[componentId] ?? ['--nx-color-primary', '--nx-color-surface', '--nx-color-border', '--nx-radius-md'];
}

function renderComponentPage(componentId: string): string {
  const component = componentCatalog[componentId];
  if (!component) {
    return renderIntroPage();
  }

  const propsMarkup = component.props
    .map(
      (entry) => `
        <tr>
          <td><code>${entry.name}</code></td>
          <td>${entry.type}</td>
          <td>${entry.defaultValue}</td>
          <td>${entry.description}</td>
        </tr>
      `,
    )
    .join('');

  const usageText = getComponentUsageText(componentId);
  const tokensList = getComponentTokens(componentId)
    .map((token) => `<li><code>${token}</code></li>`)
    .join('');

  return `
    ${renderPageHeader(component.title, component.description)}

    <nav class="component-toc" aria-label="Nesta página">
      <a href="#component-preview">Demonstração</a>
      <a href="#component-usage">Como usar</a>
      <a href="#component-api">API</a>
      <a href="#component-accessibility">Acessibilidade</a>
    </nav>

    <section id="component-preview" class="content-section">
      <h2>Preview</h2>
      <div class="demo-surface" data-theme="light">
        ${component.preview}
      </div>
    </section>

    <section id="component-usage" class="content-section docs-grid">
      <div class="info-panel">
        <h3>Quando usar</h3>
        <p>${usageText}</p>
      </div>
      <div class="info-panel">
        <h3>Temas e tokens</h3>
        <ul class="semantic-list">
          ${tokensList}
        </ul>
      </div>
    </section>

    <section class="content-section" id="component-example">
      <h2>Exemplo de uso</h2>
      ${renderCodeSample(component.sampleCode)}
    </section>

    <section id="component-api" class="content-section docs-grid">
      <div class="info-panel">
        <h3>API</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>Propriedade</th>
              <th>Tipo</th>
              <th>Padrão</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>${propsMarkup}</tbody>
        </table>
      </div>
      <div class="info-panel">
        <h3>Eventos</h3>
        <ul class="semantic-list">
          ${component.events.length ? component.events.map((event) => `<li><code>${event}</code></li>`).join('') : '<li>Sem eventos personalizados.</li>'}
        </ul>

        <h3>Slots</h3>
        <ul class="semantic-list">
          ${component.slots.length ? component.slots.map((slot) => `<li><code>${slot}</code></li>`).join('') : '<li>Nenhum</li>'}
        </ul>

        <h3 id="component-accessibility">Acessibilidade</h3>
        <p>${component.accessibility}</p>
      </div>
    </section>
  `;
}

const routeRenderers: Record<string, () => string> = {
  introduction: renderIntroPage,
  installation: renderInstallPage,
  usage: renderUsagePage,
  'design-tokens': renderDesignTokensPage,
  colors: renderColorsPage,
  typography: renderTypographyPage,
  spacing: renderSpacingPage,
  themes: renderThemePage,
  icons: renderIconsPage,
  accessibility: renderAccessibilityPage,
  button: () => renderComponentPage('button'),
  input: () => renderComponentPage('input'),
  textarea: () => renderComponentPage('textarea'),
  checkbox: () => renderComponentPage('checkbox'),
  radio: () => renderComponentPage('radio'),
  switch: () => renderComponentPage('switch'),
  select: () => renderComponentPage('select'),
  card: () => renderComponentPage('card'),
  badge: () => renderComponentPage('badge'),
  alert: () => renderComponentPage('alert'),
  spinner: () => renderComponentPage('spinner'),
  progress: () => renderComponentPage('progress'),
  toast: () => renderComponentPage('toast'),
  tabs: () => renderComponentPage('tabs'),
  breadcrumb: () => renderComponentPage('breadcrumb'),
  pagination: () => renderComponentPage('pagination'),
  dialog: () => renderComponentPage('dialog'),
  tooltip: () => renderComponentPage('tooltip'),
  popover: () => renderComponentPage('popover'),
  table: () => renderComponentPage('table'),
  icon: () => renderComponentPage('icon'),
  'icon-button': () => renderComponentPage('icon-button'),
  architecture: renderArchitecturePage,
  'form-integration': renderFormIntegrationPage,
  theming: renderThemePage,
  testing: renderTestingPage,
  npm: renderNpmPage,
  releases: renderReleasesPage,
};

function getCurrentPage(): string {
  const hash = window.location.hash.replace('#', '').trim();
  return hash || 'introduction';
}

function renderSidebar(): void {
  const nav = document.querySelector<HTMLDivElement>('#docs-nav');
  if (!nav) {
    return;
  }

  nav.innerHTML = navSections
    .map(
      (section) => `
        <div class="nav-group">
          <span class="nav-label">${section.label}</span>
          <ul class="nav-list">
            ${section.items
              .map(
                (item) => `
                  <li>
                    <a href="#${item.id}" class="nav-item ${getCurrentPage() === item.id ? 'active' : ''}" data-page="${item.id}">${item.label}</a>
                  </li>
                `,
              )
              .join('')}
          </ul>
        </div>
      `,
    )
    .join('');
}

function renderBreadcrumb(pageId: string): string {
  const pageName = pageTitles[pageId] ?? 'Introduction';
  return `
    <nav class="doc-breadcrumb" aria-label="Breadcrumb">
      <a href="#introduction">Nexora</a>
      <span>/</span>
      <span>${pageName}</span>
    </nav>
  `;
}

function hydrateDemos(): void {
  const demoNodes = document.querySelectorAll<HTMLElement>('[data-demo]');

  demoNodes.forEach((node) => {
    const type = node.getAttribute('data-demo');
    if (!type) {
      return;
    }

    if (type === 'button') {
      node.innerHTML = `
        <div class="button-row">
          <nx-button variant="primary">Primary</nx-button>
          <nx-button variant="secondary">Secondary</nx-button>
          <nx-button variant="outline">Outline</nx-button>
          <nx-button variant="ghost">Ghost</nx-button>
          <nx-button variant="danger">Danger</nx-button>
          <nx-button disabled>Disabled</nx-button>
        </div>
      `;
    }

    if (type === 'input') {
      node.innerHTML = `
        <div class="stacked-form">
          <nx-input label="Email" type="email" value="team@nexora.design"></nx-input>
          <nx-input label="Password" type="password" required error="Required field"></nx-input>
          <nx-input label="Company" helper-text="Optional" disabled></nx-input>
        </div>
      `;
    }

    if (type === 'textarea') {
      node.innerHTML = `
        <div class="stacked-form">
          <nx-textarea label="Feedback" rows="4" helper-text="Share your thoughts"></nx-textarea>
          <nx-textarea label="Notes" required error="Please add a note"></nx-textarea>
        </div>
      `;
    }

    if (type === 'checkbox') {
      node.innerHTML = `
        <div class="stacked-list">
          <nx-checkbox checked label="Subscribe to updates"></nx-checkbox>
          <nx-checkbox label="I accept the terms"></nx-checkbox>
          <nx-checkbox disabled label="Unavailable option"></nx-checkbox>
        </div>
      `;
    }

    if (type === 'radio') {
      node.innerHTML = `
        <div class="stacked-list">
          <nx-radio checked name="plan" value="starter" label="Starter"></nx-radio>
          <nx-radio name="plan" value="pro" label="Pro"></nx-radio>
          <nx-radio disabled name="plan" value="enterprise" label="Enterprise"></nx-radio>
        </div>
      `;
    }

    if (type === 'switch') {
      node.innerHTML = `
        <div class="stacked-list">
          <nx-switch checked label="Notifications"></nx-switch>
          <nx-switch label="Beta features"></nx-switch>
          <nx-switch disabled label="Disabled toggle"></nx-switch>
        </div>
      `;
    }

    if (type === 'select') {
      node.innerHTML = `
        <div class="stacked-form">
          <nx-select label="Workspace" value="design">
            <option value="design">Design</option>
            <option value="engineering">Engineering</option>
            <option value="product">Product</option>
          </nx-select>
          <nx-select label="Region" error="Please select a region" disabled>
            <option value="na">North America</option>
          </nx-select>
        </div>
      `;
    }

    if (type === 'card') {
      node.innerHTML = `
        <div class="card-grid">
          <nx-card title="Team overview">
            <p>Design, marketing and product collaborate to ship polished experiences.</p>
          </nx-card>
          <nx-card title="Quarterly goals">
            <p>Ship fewer high-impact releases with clearer guidance and better onboarding.</p>
          </nx-card>
        </div>
      `;
    }

    if (type === 'badge') {
      node.innerHTML = `
        <div class="badge-row">
          <nx-badge tone="info">Info</nx-badge>
          <nx-badge tone="success">Success</nx-badge>
          <nx-badge tone="warning">Warning</nx-badge>
          <nx-badge tone="error">Error</nx-badge>
        </div>
      `;
    }

    if (type === 'alert') {
      node.innerHTML = `
        <div class="stacked-list">
          <nx-alert severity="info" heading="Heads up">A new version of the documentation is available.</nx-alert>
          <nx-alert severity="success" heading="Saved">Changes were stored successfully.</nx-alert>
          <nx-alert severity="warning" heading="Review required">Please validate the required fields before continuing.</nx-alert>
          <nx-alert severity="error" heading="Blocked">The action cannot be completed due to a validation error.</nx-alert>
        </div>
      `;
    }

    if (type === 'spinner') {
      node.innerHTML = `
        <div class="inline-row">
          <nx-spinner size="sm" label="Loading small"></nx-spinner>
          <nx-spinner size="md" label="Loading medium"></nx-spinner>
          <nx-spinner size="lg" label="Loading large"></nx-spinner>
        </div>
      `;
    }

    if (type === 'progress') {
      node.innerHTML = `
        <div class="stacked-list">
          <nx-progress value="25" max="100" label="Upload progress"></nx-progress>
          <nx-progress value="70" max="100" label="Task completion"></nx-progress>
        </div>
      `;
    }

    if (type === 'toast') {
      node.innerHTML = `
        <div class="stacked-list">
          <nx-toast open severity="info" duration="5000">Your preferences were updated.</nx-toast>
          <nx-toast open severity="success" duration="5000">Changes saved successfully.</nx-toast>
        </div>
      `;
    }

    if (type === 'tabs') {
      const tabs = document.createElement('nx-tabs') as HTMLElement & Record<string, unknown>;
      tabs.innerHTML = `
        <button slot="tab" type="button">Overview</button>
        <button slot="tab" type="button">API</button>
        <button slot="tab" type="button">Accessibility</button>
        <div slot="panel"><p>Overview content for a collection of tasks and decisions.</p></div>
        <div slot="panel"><p>API content describing component shape and semantics.</p></div>
        <div slot="panel"><p>Accessibility notes covering focus, labels and keyboard controls.</p></div>
      `;
      node.replaceChildren(tabs);
    }

    if (type === 'breadcrumb') {
      const breadcrumb = document.createElement('nx-breadcrumb') as HTMLElement & Record<string, unknown>;
      breadcrumb.items = [
        { label: 'Home', href: '#introduction' },
        { label: 'Components', href: '#button' },
        { label: 'Breadcrumb' },
      ];
      node.replaceChildren(breadcrumb);
    }

    if (type === 'pagination') {
      const pagination = document.createElement('nx-pagination') as HTMLElement & Record<string, unknown>;
      pagination.currentPage = 3;
      pagination.totalPages = 8;
      node.replaceChildren(pagination);
    }

    if (type === 'dialog') {
      const dialog = document.createElement('nx-dialog') as HTMLElement & Record<string, unknown>;
      dialog.title = 'Confirm action';
      dialog.open = true;
      dialog.innerHTML = '<p>Would you like to continue with the current changes?</p>';
      node.replaceChildren(dialog);
    }

    if (type === 'tooltip') {
      node.innerHTML = `
        <nx-tooltip text="Click to open the content menu">
          <button type="button" class="mini-button">Hover me</button>
        </nx-tooltip>
      `;
    }

    if (type === 'popover') {
      node.innerHTML = `
        <nx-popover title="Filters">
          <span slot="trigger">Open popover</span>
          <p>Filter results and compare date ranges with a single click.</p>
        </nx-popover>
      `;
    }

    if (type === 'table') {
      const table = document.createElement('nx-table') as HTMLElement & Record<string, unknown>;
      table.header = 'Design teams';
      table.columns = [
        { key: 'team', header: 'Team' },
        { key: 'focus', header: 'Focus' },
        { key: 'status', header: 'Status' },
      ];
      table.rows = [
        { team: 'Design', focus: 'Product system', status: 'Healthy' },
        { team: 'Engineering', focus: 'Component adoption', status: 'On track' },
        { team: 'Marketing', focus: 'Launch messaging', status: 'Review' },
      ];
      table.striped = true;
      table.hover = true;
      node.replaceChildren(table);
    }

    if (type === 'icon') {
      node.innerHTML = `
        <div class="icon-grid small-grid">
          <div class="icon-card"><nx-icon name="info" size="lg"></nx-icon><span>info</span></div>
          <div class="icon-card"><nx-icon name="warning" size="lg"></nx-icon><span>warning</span></div>
          <div class="icon-card"><nx-icon name="search" size="lg"></nx-icon><span>search</span></div>
          <div class="icon-card"><nx-icon name="chevron-down" size="lg"></nx-icon><span>chevron-down</span></div>
        </div>
      `;
    }

    if (type === 'icon-button') {
      node.innerHTML = `
        <div class="inline-row">
          <nx-icon-button icon="plus" aria-label="Add item" variant="primary"></nx-icon-button>
          <nx-icon-button icon="close" aria-label="Close item" variant="secondary"></nx-icon-button>
          <nx-icon-button icon="warning" aria-label="Warning" variant="danger"></nx-icon-button>
        </div>
      `;
    }
  });
}

function renderCurrentPage(): void {
  const currentPage = getCurrentPage();
  const renderer = routeRenderers[currentPage] ?? renderIntroPage;
  const app = document.querySelector<HTMLDivElement>('#app');

  if (!app) {
    return;
  }

  app.innerHTML = `
    <div class="docs-shell">
      <aside class="sidebar">
        <div class="brand-block">
          <div class="brand-mark">N</div>
          <div class="brand-text">
            <strong>Nexora</strong>
            <span>Design System</span>
          </div>
        </div>
        <div class="sidebar-version">v0.1.0</div>
        <nav id="docs-nav" class="docs-nav" aria-label="Primary navigation"></nav>
      </aside>
      <div class="docs-main">
        <header class="topbar">
          <button type="button" class="mobile-toggle" aria-label="Toggle navigation">☰</button>
          <div class="header-breadcrumb">${renderBreadcrumb(currentPage)}</div>
          <div class="header-actions">
            <button type="button" class="theme-toggle" aria-label="Toggle documentation theme">☀️</button>
            <a href="https://github.com/EstelaAPC/nexora-design-system-docs" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.npmjs.com/org/nexora-ds" target="_blank" rel="noreferrer">NPM</a>
          </div>
        </header>
        <main id="page-content" class="page-content">${renderer()}</main>
      </div>
    </div>
  `;

  const appTheme = localStorage.getItem('nexora-doc-theme') ?? 'light';
  document.documentElement.dataset.theme = appTheme;
  const themeToggle = document.querySelector<HTMLButtonElement>('.theme-toggle');

  if (themeToggle) {
    themeToggle.textContent = appTheme === 'dark' ? '☀️' : '🌙';
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem('nexora-doc-theme', nextTheme);
      themeToggle.textContent = nextTheme === 'dark' ? '☀️' : '🌙';
    });
  }

  const mobileToggle = document.querySelector<HTMLButtonElement>('.mobile-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      document.querySelector('.sidebar')?.classList.toggle('open');
    });
  }

  renderSidebar();
  document.querySelectorAll<HTMLAnchorElement>('[data-page]').forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelector('.sidebar')?.classList.remove('open');
      renderCurrentPage();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.copy-code').forEach((button) => {
    button.addEventListener('click', async () => {
      const code = button.closest('.code-block')?.querySelector('code')?.textContent;
      const label = button.querySelector<HTMLElement>('.copy-code-label');
      const status = button.closest('.code-block')?.querySelector<HTMLElement>('.copy-status');

      if (!code || !label || !status) {
        return;
      }

      try {
        await navigator.clipboard.writeText(code);
        label.textContent = 'Copiado!';
        status.textContent = 'Código copiado para a área de transferência.';
        window.setTimeout(() => {
          label.textContent = 'Copiar código';
          status.textContent = '';
        }, 1800);
      } catch (error) {
        console.error('Não foi possível copiar o código.', error);
        label.textContent = 'Falha ao copiar';
        status.textContent = 'Não foi possível acessar a área de transferência. Selecione e copie o código manualmente.';
      }
    });
  });

  hydrateDemos();
  document.title = `Nexora Design System · ${pageTitles[currentPage] ?? 'Introduction'}`;
}

window.addEventListener('hashchange', () => {
  const hash = getCurrentPage();
  if (routeRenderers[hash]) {
    renderCurrentPage();
  }
});

renderCurrentPage();
