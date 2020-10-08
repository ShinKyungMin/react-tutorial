import React, {useState} from 'react';
import UserProfile from './UserProfile';

function UserProfileList() {

        const [users] = useState([
            {id : 1, name : 'A', image : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job : 'q'},
            {id : 2, name : 'B', image : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job : 'w'},
            {id : 3, name : 'C', image : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job : 'e'},
            {id : 4, name : 'D', image : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job : 'r'},
            {id : 5, name : 'E', image : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job : 't'},
            {id : 6, name : 'F', image : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job : 'y'},
        ]);
    

    return (
        <div>
            {users.map((user) => {
                return (
                    <UserProfile
                        user = {user} />
                )
            })}
        </div>
    )
}
export default UserProfileList;