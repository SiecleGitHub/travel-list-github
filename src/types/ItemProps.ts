export interface ItemProps {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
  onDeleteItem?: (id: number) => void;
}
