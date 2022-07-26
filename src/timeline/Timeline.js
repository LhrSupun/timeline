import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'

const groups = [{ id: 1, title: 'driver 1', stackItems: true }, { id: 2, title: 'driver 2', stackItems: true }, { id: 2, title: 'driver 2', stackItems: true }]

const items = [
    {
        id: 1,
        group: 1,
        title: 'order 1',
        canMove: true,
        canResize: true,
        start_time: moment(),
        end_time: moment().add(1, 'hour')
        
    },
    {
        id: 2,
        group: 2,
        title: 'order 2',
        canMove: true,
        canResize: true,
        start_time: moment().add(-0.5, 'hour'),
        end_time: moment().add(0.5, 'hour')
    },
    {
        id: 3,
        group: 1,
        title: 'order 3',
        canMove: true,
        canResize: true,
        start_time: moment().add(2, 'hour'),
        end_time: moment().add(3, 'hour')
    },
    {
        id: 3,
        group: 2,
        title: 'order 4',
        canMove: true,
        canResize: true,
        start_time: moment().add(2, 'hour'),
        end_time: moment().add(4, 'hour')
    },
    {
        id: 3,
        group: 3,
        title: 'order 4',
        canMove: true,
        canResize: true,
        start_time: moment().add(2, 'hour'),
        end_time: moment().add(4, 'hour')
    }
]

export default function TimelineFunction() {

    return (
        <Timeline
            groups={groups}
            items={items}
            defaultTimeStart={moment().add(-12, 'hour')}
            defaultTimeEnd={moment().add(12, 'hour')}
            
        />
    )
}
