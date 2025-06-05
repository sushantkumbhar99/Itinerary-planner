import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useState } from 'react';
import { itinerary as initialItems } from '../data/itinerary';
import ItineraryCard from './ItineraryCard';
 
export default function ItineraryList() {
  const [places, setPlaces] = useState(initialItems);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updated = Array.from(places);
    const [moved] = updated.splice(result.source.index, 1);
    updated.splice(result.destination.index, 0, moved);

    setPlaces(updated);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="itinerary">
        {(provided) => (
          <div
            className="space-y-4 p-4"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {places.map((place, index) => (
              <Draggable key={place.id} draggableId={place.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`transition-all duration-200 ${
                      snapshot.isDragging ? 'bg-pink-100 scale-[1.01]' : ''
                    }`}
                  >
                    <ItineraryCard place={place} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
