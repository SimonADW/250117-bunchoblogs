import React from "react";

function useClickOutside(
	ref: React.RefObject<HTMLElement>,
	callback: () => void,
	isOpen?: boolean
) {
	
	React.useEffect(() => {
		// If isOpen is passed, and it is false, return early
		if (isOpen === false) return;

		function handleClickOutside(event: MouseEvent | TouchEvent) {						
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			} 
			
			callback();		
		}

		document.addEventListener("click", handleClickOutside);
		document.addEventListener("touchstart", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
			document.removeEventListener("touchstart", handleClickOutside);
		};
	}, [ref, callback, isOpen]);
}

export default useClickOutside;
