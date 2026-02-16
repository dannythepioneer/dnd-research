import React from 'react';
import { useDraggable } from "@dnd-kit/react";

export function Draggable({id}:{id: string}) {
	const {ref} = useDraggable({id});
	
	return (
		<button ref={ref} className="btn btn-primary btn-lg btn-block shadow-sm px-2.5 py-1.5 bg-blue-500 rounded-md text-white">
			Draggable
		</button>
	);
}