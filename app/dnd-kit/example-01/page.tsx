"use client"

import React from 'react';
import { DragDropProvider } from '@dnd-kit/react';

import { Draggable } from './Draggable';

export function Page() {
	return (
		<DragDropProvider>
			<Draggable id="draggable" />
		</DragDropProvider>
	);
}

export default Page;