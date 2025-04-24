import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const defaultCategory = categories[1] || ""; // Skip "All"
  
  const [formData, setFormData] = useState({
    text: "",
    category: defaultCategory,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.text.trim() === "") return; // Prevent empty submissions

    onTaskFormSubmit(formData); // Send task to parent
    setFormData({
      text: "",
      category: defaultCategory,
    }); // Reset form
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </label>

      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {categories
            .filter((category) => category !== "All")
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>

      <input
        type="submit"
        value="Add task"
        disabled={formData.text.trim() === ""}
      />
    </form>
  );
}

export default NewTaskForm;