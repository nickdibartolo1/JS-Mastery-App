import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { ICategory } from "@/lib/database/models/category.model";

type DropDownProps = {
  value?: string;
  onChangeHandler?: () => void;
};

const Dropdown = ({ value, onChangeHandler }: DropDownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([
    {_id: 1, name: "Category 1"},
    {_id: 2, name: "Category 2"},
]);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
      {categories.length > 0 && categories.map((category) => (
        <SelectItem key={category._id} value={category._id} className="select-item p-regular-14">
            {category.name}
        </SelectItem>
      ))}
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
