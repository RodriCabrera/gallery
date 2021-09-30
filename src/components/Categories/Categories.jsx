import React from "react";

const Categories = ({ categories, setSelectedCategory }) => {
	const handleChange = (e) => {
		setSelectedCategory(parseInt(e.target.value));
	};
	return (
		<>
			<select defaultValue="" onChange={handleChange}>
				<option value="" disabled>
					FILTER BY CATEGORIES
				</option>
				{categories?.map((category) => (
					<option value={category.id} key={category.id}>
						{category.name}
					</option>
				))}
			</select>
		</>
	);
};

export default Categories;