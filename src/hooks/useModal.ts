import React from "react"
 
type UseDialogReturnType = {
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	handleDismiss: () => void;
};


const useDialog = (): UseDialogReturnType => {
	const [isVisible, setIsVisible] = React.useState(false);

	const handleDismiss = ()=> {
		setIsVisible(false)
	}

	return {isVisible, setIsVisible, handleDismiss};
}

export default useDialog;