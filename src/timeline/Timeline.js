import React, { useState } from 'react';
import Timeline, {
    CustomMarker
} from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'


export default function TimelineFunction() {
    const date = new Date();
    const [selected, setSelected] = useState();
    const groups = [{ id: 1, title: 'driver 1', stackItems: true }, { id: 2, title: 'driver 2', stackItems: true }, { id: 3, title: 'driver 3', stackItems: true }]
    const item = [
        {
            id: 1,
            group: 1,
            title: 'order 1',
            canMove: true,
            canResize: true,
            start_time: date.setHours(8, 0, 0, 0),
            end_time: date.setHours(8, 10, 0, 0),
            selectedBgColor: '#rgba(245, 40, 145, 0.8)',
            bgColor: '#rgba(245, 40, 145, 0.8)',
            borderColor: '#rgba(245, 40, 145, 0.8)',

        },
        {
            id: 2,
            group: 2,
            title: 'order 2',
            canMove: true,
            canResize: true,
            start_time: date.setHours(8, 10, 0, 0),
            end_time: date.setHours(8, 20, 0, 0),
            selectedBgColor: '#00bcd4',
            bgColor: '#00bcd4',
        },
        {
            id: 3,
            group: 1,
            title: 'order 3',
            canMove: true,
            canResize: true,
            start_time: date.setHours(8, 30, 0, 0),
            end_time: date.setHours(8, 40, 0, 0),
            selectedBgColor: '#00bcd4',
            bgColor: '#00bcd4',
        },
        {
            id: 4,
            group: 2,
            title: 'order 4',
            canMove: true,
            canResize: true,
            start_time: date.setHours(8, 50, 0, 0),
            end_time: date.setHours(9, 0, 0, 0),
            selectedBgColor: '#00bcd4',
            bgColor: '#00bcd4',
        },
        {
            id: 5,
            group: 3,
            title: 'order 4',
            canMove: true,
            canResize: true,
            start_time: date.setHours(9, 10, 0, 0),
            end_time: date.setHours(9, 20, 0, 0),
        }
    ]
    const [items, setItems] = useState(item);


    const startDate = date.setHours(6, 0, 0, 0);
    const endDate = date.setHours(15, 59, 59, 999);
    const morning = date.setHours(8, 0, 0, 0);
    const afternoon = date.setHours(12, 0, 0, 0);


    return (
        <>

            <Timeline
                groups={groups}
                items={items}
                visibleTimeStart={startDate}
                visibleTimeEnd={endDate}
                onItemSelect={(itemId, e, time) => {
                    const selected = items.find(item => item.id === itemId);
                    setSelected(selected);
                }}
                onItemMove={(itemId, dragTime, newGroupOrder) => {
                    const newItems = items.map(item => {
                        if (item?.id === itemId) {
                            return {
                                ...item,
                                group: groups[newGroupOrder].id,
                                start_time: dragTime,
                                end_time: dragTime + (item.end_time - item.start_time),
                            }
                        }
                        return item;
                    });
                    setItems(newItems);

                }}>
                <CustomMarker date={morning} />
                <CustomMarker date={afternoon} />
            </Timeline>
            {JSON.stringify(selected)}
        </>
    )
}
