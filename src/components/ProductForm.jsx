function ProductForm() {
    return (
        <div className='form-container'>
            <h2>Add new product</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor='pr-name'>Product Name:</label>
                    <input
                        type='text'
                        name='pr-name'
                        placeholder='Product Name'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pr-desc'>Description</label>
                    <input
                        type='text'
                        name='pr-desc'
                        placeholder='Description...'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pr-price'>Price</label>
                    <input
                        type='number'
                        name='pr-price'
                    />
                </div>
                <button className='btn primary'>Save</button>
            </form>
        </div>
    );
}

export default ProductForm;
