const TabCard = props => {
    const {name} = props;
    return(
        <div class="card">
            <div class="card-body">
                This is {name} I am a great tab 
            </div>
        </div>
    );
}
export default TabCard