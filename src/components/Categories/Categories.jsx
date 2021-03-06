import React from "react";
import "./categories.css";

const Categories = ({ categories, setSelectedCategory }) => {
	const handleChange = (e) => {
		setSelectedCategory(parseInt(e.target.value));
	};
	return (
		<>
			<select
				className="categories-select"
				style={{ marginLeft: "1rem" }}
				defaultValue=""
				onChange={handleChange}
			>
				<option value="" disabled>
					FILTER BY CATEGORIES
				</option>
				{categories?.map((category) => (
					<option value={category.id} key={category.id}>
						{category.name}
					</option>
				))}
				<option value="">SHOW ALL</option>
			</select>
		</>
	);
};

export default Categories;
