const Tabs = props => {
    const {name, showTab, idx} = props;

    return (
     <button type="button" class="btn btn-outline-dark text-center" onClick= {()=>showTab(idx)}> {name} </button>
            
     


    );
}

export default Tabs;