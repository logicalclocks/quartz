export function buttonIntentToColor(intent: string) {
  switch (intent) {
    case 'primary':
      return 'white';
    case 'secondary':
      return 'primary';
    case 'ghost':
      return 'primary';
    case 'ghost':
      return 'primary';
    case 'alert':
      return 'labels.red';
    default:
      return 'primary';
  }
}
