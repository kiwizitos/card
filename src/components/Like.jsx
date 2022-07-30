import { useState } from "react";
import { HeartIcon } from '@heroicons/react/solid';

function Like() {
    const [like, setLike] = useState();

    return ( 
        <button className="bg-white w-30 h-30">
            <HeartIcon />
        </button>
     );
}

export default Like;