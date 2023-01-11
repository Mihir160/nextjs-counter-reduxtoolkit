import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../Counter/CounterSlice";
import { fetchPosts } from "../Todos/TodosSlice";

const CounterView = () => {
    const count = useSelector((state) => state.counter.count)
    const { isLoading, posts, error } = useSelector((state) => state.posts)
    console.log(count)
    const dispatch = useDispatch()
    useEffect(() =>{
          dispatch(fetchPosts())
    },[])
    console.log(posts)
    return (
        <div>
            <h1>Counter</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => { dispatch(increment()) }}>Increment</button>
            <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
            <button onClick={() => { dispatch(reset()) }}>reset</button>

            {
                isLoading && <h3>Loading....</h3>

            }
            {
                error && <h3>{error}</h3>
            }
            {
                posts && posts.map((post) => {

                  return(
                    <>
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                    </>
                  )

                })
            }
        </div>
    );
};

export default CounterView;