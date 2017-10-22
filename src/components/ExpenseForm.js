import React, {Component} from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note:  props.expense ? props.expense.note: '',
      amount: props.expense ? (props.expense.amount).toString() : '',
      createdAt:  props.expense ? moment(props.expense.createdAt ): moment(),
      calendarFocused:false,
      error:''
    }
  }


  onDescriptionChange = (e)=>{
    const description = e.target.value;
    this.setState(()=>({description}))
  };

  onNoteChange = (e)=>{
    const note = e.target.value;
    this.setState(()=>({note}));
  }

  onAmountChange = (e)=>{
    const amount = e.target.value;
    if((typeof amount==='number') || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(()=>({amount:amount}))
    }
  }

  onDateChange = (createdAt)=>{
    if(createdAt){
      this.setState(()=>({createdAt}))
    }
  }

  onFocusChange = ({focused})=>{
    this.setState(()=>({calendarFocused:focused}))
  }

  onSubmit = (e)=>{
    e.preventDefault();
    if(!this.state.description || !this.state.amount){
      this.setState((e)=>({error:'Please check your form fields'}))
    }else{
      this.setState((e)=>({error:''}));
      this.props.onSubmit({
        description:this.state.description,
        amount: parseFloat(this.state.amount,10),
        note:this.state.note,
        createdAt: this.state.createdAt.valueOf()
      })
    }
  }

  render(){
    return(
       <form className="form" onSubmit={this.onSubmit}>
        {this.state.error &&  <p className="form_error">{this.state.error}</p>}
         <input 
            className="text-input"
            type="text" 
            placeholder="description" 
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            className="text-input"
            type="number" 
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}        
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=> false}
          />
          <textarea 
            className="textarea"
            placeholder="Add a note for your expense(optional)"
            value = {this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button
            className="button" 
            type="submit">
            {this.props.buttonLabel}
          </button>
       </form>
    )
  }
}