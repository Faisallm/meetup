import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

function NewMeetupPage() {

    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch('https://meetup-51228-default-rtdb.firebaseio.com/meetups.json', 
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            // replace will not allow us to use the...
            // back button
            navigate('/');
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm  onAddMeetUp={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetupPage;