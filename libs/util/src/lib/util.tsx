export const appendClasses = (
  className: string | string[],
  defaultClassName: string
) =>
  defaultClassName.concat(
    ' ',
    typeof className === 'string' ? className : className.join(' ')
  );
