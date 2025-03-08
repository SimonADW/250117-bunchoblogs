import React from "react";

function useKeydown(key: string, callback: ()=> void) {
	React.useEffect(() => {
		function handleKeydown(event: KeyboardEvent) {
			if(event.code === key) {
				callback();			
			}
		}

		window.addEventListener("keydown", handleKeydown)
		return () => { window.removeEventListener("keydown", handleKeydown) }
	}, [key, callback])
}

export default useKeydown;