const useFilterTodos = (filter: "all" | "active" | "completed") => {
	//ide meg kell adnia az active filter és vissza kell adnia egy filterelt todo listát
	//paramként be kell jönnie majd a todoknak

	//ezekbe az ágakba még hogy feltölteni az őj filtered todokat
	if (filter === "all") {
		setActiveFilter("all");
	} else if (filter === "active") {
		setActiveFilter("active");
	} else {
		setActiveFilter("completed");
	}

	//itt még majd az új filtered toodkat is vissza kell reutrnolni
	return activeFilter;
};
export default useFilterTodos;
