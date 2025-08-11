import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { cn } from '../../lib/utils';

const Sheet = ({ children, open, onOpenChange }) => {
  return (
    <Dialog open={open} onClose={() => onOpenChange(false)}>
      {children}
    </Dialog>
  );
};

const SheetTrigger = ({ children }) => {
  return children;
};

const SheetContent = ({ children, className, ...props }) => {
  return (
    <Transition.Child
      as={React.Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 translate-x-full"
      enterTo="opacity-100 translate-x-0"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 translate-x-full"
    >
      <Dialog.Panel
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background p-6 shadow-lg sm:max-w-sm",
          className
        )}
        {...props}
      >
        {children}
      </Dialog.Panel>
    </Transition.Child>
  );
};

const SheetHeader = ({ className, ...props }) => (
  <div
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props}
  />
);

const SheetTitle = ({ className, ...props }) => (
  <Dialog.Title
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
);

const SheetDescription = ({ className, ...props }) => (
  <Dialog.Description
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
);

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription };