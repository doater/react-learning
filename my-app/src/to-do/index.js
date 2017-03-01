import React from 'react'

import TodoList from './to-do-list'

function id() {
    return Math.random().toString().replace(/\./, '') + '-' + Math.random().toString().replace(/\./, '')
}

var TodoMVC = React.createClass({
    getInitialState: function() {
        return {
            items: [{
                text: 'aaa',
                id: id(),
                type: 'active'
            }, {
                text: 'bbb',
                id: id(),
                type: 'no-active'
            }, {
                text: 'ccc',
                id: id()
            }],
            value: 'inp'
        }
    },
    render: function() {
        return (
            <div className="todo-mvc">
                <h3>todos</h3>

                <p>
                    <input value={this.state.value} onChange={this.handleChange}/>
                    <button onClick={this.handleAdd}>提交</button>
                </p>
                <TodoList
                    items={this.state.items}
                    onDelete={this.handleDelete}
                    onEdit={this.handleEdit}
                />
            </div>
        )
    },
    handleEdit: function(obj) {
        alert(obj.text)
        var items = this.state.items;


        items = items.map(function(o) {
            console.log(obj.id, o.id)
            if (o.id == obj.id) {

                o.text = obj.text
            }
            return o
        })
        console.log(items)
        this.setState({
            items: items
        })
    },

    handleDelete: function(obj) {

        var items = this.state.items,
            json = []
        for (var i = 0; i < items.length; i++) {
            if (items[i].id != obj.id) {
                json.push(items[i])
            }
        }
        this.setState({
            items: json
        })
    },
    handleAdd: function() {
        var items = this.state.items,
            text = this.state.value
        items.push({
            text: text,
            id: id()
        })
        this.setState({
            items: items,
            value: ''
        })
    },
    handleChange: function(e) {
        this.setState({
            value: e.target.value
        })
    }
})
module.exports = TodoMVC