const fetchTasks = async (url) => {
    const res = await fetch(url,{
        next : {
            tags : ['tasks']
        }
    });

    if (res.ok) {
        const json = await res.json();
        return json
    }
}

export default fetchTasks