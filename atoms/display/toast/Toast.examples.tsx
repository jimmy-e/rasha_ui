import React from 'react';
import { Button } from '../../inputs/button/Button';
import { useToast } from './Toast.context';

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffleArray = (array: any[]): any[] => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

export const DemoToast: React.FC = () => {
  const toast = useToast();

  const toastType = ['danger' , 'info' , 'success' , 'warning'];
  const label = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
  anim id est laborum.`;
  const toastLabel = ['', '', '', label];
  const toastOnClick = [null, null, null, () => {}]

  return (
    <Button
      label="show random toast"
      onClick={() => {
        toast({
          buttonLabel: 'Click Me',
          onClick: shuffleArray(toastOnClick)[0],
          label: shuffleArray(toastLabel)[0],
          title: 'Sample Toast',
          type: shuffleArray(toastType)[0],
        })
      }}
    />
  );
};

export const InfoToast: React.FC = () => {
  const toast = useToast();

  return (
    <Button
      label="show info toast"
      onClick={() => toast({ title: 'Sample Toast', type: 'info' })}
    />
  );
};

export const SuccessToast: React.FC = () => {
  const toast = useToast();

  return (
    <Button
      color="success"
      label="show success toast"
      onClick={() => toast({ title: 'Sample Toast', type: 'success' })}
    />
  );
};

export const WarningToast: React.FC = () => {
  const toast = useToast();

  return (
    <Button
      color="warning"
      label="show warning toast"
      onClick={() => toast({ title: 'Sample Toast', type: 'warning' })}
    />
  );
};

export const DangerToast: React.FC = () => {
  const toast = useToast();

  return (
    <Button
      color="danger"
      label="show danger toast"
      onClick={() => toast({ title: 'Sample Toast', type: 'danger' })}
    />
  );
};

export const NonStickyToast: React.FC = () => {
  const toast = useToast();

  return (
    <Button
      label="show non-sticky toast"
      onClick={() => toast({ title: 'Temporary Toast' })}
    />
  );
};

export const StickyToast: React.FC = () => {
  const toast = useToast();

  return (
    <Button
      label="show sticky toast"
      onClick={() => toast({ sticky: true, title: 'Sticky Toast' })}
    />
  );
};

export const NoLabelToast: React.FC = () => {
  const toast = useToast();

  return (
    <Button
      label="show toast with no label"
      onClick={() => toast({ title: 'No Label' })}
    />
  );
};

export const LabelToast: React.FC = () => {
  const toast = useToast();

  return (
    <Button
      label="show toast with a label"
      onClick={() => {
        toast({
          label: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.`,
          title: 'With Label',
        })
      }}
    />
  );
};

export const NoButtonToast: React.FC = () => {
  const toast = useToast();

  return (
    <Button
      label="show toast with no button"
      onClick={() => toast({ title: 'No Button' })}
    />
  );
};

export const ButtonToast: React.FC = () => {
  const toast = useToast();

  return (
    <Button
      label="show toast with a button"
      onClick={() => toast({ buttonLabel: 'Click Me', onClick: () => {}, title: 'Has a Button' })}
    />
  );
};
