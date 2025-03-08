import React from "react"
 
type UseToggleReturnType = [
	value: boolean,
	toggleValue: (value?: boolean) => void
];


const useToggle = (initialValue: boolean): UseToggleReturnType => {
	if (typeof initialValue !== "boolean") {
		console.warn("Invalid type; Intitial value not of type boolean")
	}
	
	const [value, setValue] = React.useState(initialValue);

	const toggleValue = React.useCallback((value?: boolean)=> {		
		setValue((prev: boolean)=> value ? value : !prev)
	}, []);	

	return [ value, toggleValue ];
}

export default useToggle;