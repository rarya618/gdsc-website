import { useEffect } from "react";

// set page title
export function useTitle(title: string) {
	useEffect(() => {
		const prevTitle = document.title;

		document.title = title + " – GDSC @ the University of Sydney";
		
		return () => {
			document.title = prevTitle
		}
	})
}