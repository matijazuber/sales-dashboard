import { useActionState } from "react";
import supabase from "./supabase-client";
const Form =({ metrics }) =>{

    const [error,submitAction,isPending] = useActionState(
         async(previousState,formData)=>{
             const newDeal = {
        name: formData.get('name'),
        value: formData.get('value'),
      };
      console.log(newDeal)

      const {error} = await supabase.from('sales_deals').insert(newDeal)


        if (error) {
        console.error('Error adding deal: ', error.message);
        return new Error('Failed to add deal');
      }


      return null

    },null
    )

   

  const generateOptions = () => {
    return metrics.map((metric) => (
      <option key={metric.name} value={metric.name}>
        {metric.name}
      </option>
    ));
  };

  return (
    <div className="add-form-container">
      <form
       action={submitAction}
      >
        <div id="form-description" className="sr-only">
          Use this form to add a new sales deal. Select a sales rep and enter
          the amount.
        </div>

        <label htmlFor="deal-name">
          Name:
          <select
            id="deal-name"
            name="name"
            defaultValue={metrics?.[0]?.name || ''}
            aria-required="true"
      
          >
            {generateOptions()}
          </select>
        </label>

        <label htmlFor="deal-value">
          Amount: $
          <input
            id="deal-value"
            type="number"
            name="value"
            defaultValue={0}
            className="amount-input"
            min="0"
            step="10"
         
          />
        </label>

        <button 
          type="submit" 
         
        >
                   {isPending ? 'Adding...' : "Add Deal"}

        </button>
      </form>

      {/* Error message */}
    </div>
  );
};

export default Form;
