export interface SelectListProps {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
}
