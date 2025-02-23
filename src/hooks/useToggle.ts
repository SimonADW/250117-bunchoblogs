import React from "react"
 
type UseToggleReturnType = [
	value: boolean,
	toggleValue: () => void
];


const useToggle = (initialValue: boolean): UseToggleReturnType => {
	if (typeof initialValue !== "boolean") {
		console.warn("Invalid type; Intitial value not of type boolean")
	}
	
	const [value, setValue] = React.useState(initialValue);

	const toggleValue = React.useCallback((value?: boolean)=> {		
		console.log("Toggle")
		setValue((prev: boolean)=> value ? value : !prev)
	}, []);	

	return [ value, toggleValue ];
}

export default useToggle;