'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wrapperStyle = {
  maxWidth: '960px',
  margin: '0 auto',
  fontFamily: 'Helvetica, Arial, sans-serif'
};
var errorStyle = {
  backgroundColor: '#ff7f7f',
  padding: '15px',
  maxWidth: '100%',
  top: '0',
  left: '0',
  textAlign: 'center',
  position: 'relative',
  transition: 'all ease-out 3s',
  clear: 'both',
  display: 'table',
  content: ''
};

var xStyle = {
  position: 'absolute',
  top: '0',
  right: '0',
  transform: 'scaleX(1.25)',
  marginRight: '10px',
  fontFamily: 'Arial',
  cursor: 'pointer'
};

var buttonStyle = {
  minWidth: '100px',
  padding: '3px',
  borderRadius: '12px',
  margin: '15px 3px',
  float: 'left',
  backgroundColor: "rgba(0, 255,0,0.5)",
  border: '1px solid gray'
};

var clearFix = {
  clear: 'both',
  display: 'table',
  content: ''
};

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handlePickOptions = _this.handlePickOptions.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      try {
        //Run the code below when componentDidMount
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);

        // Only change the state if the options array is not empty
        if (options) {
          this.setState(function () {
            return {
              options: options
            };
          });
        }
        //When there are errors when the code ran, catch will take effect
      } catch (e) {
        //In this application, do nothing
        //Just revert the options to being an empty array;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log(json);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('The component unmounted');
      //localStorage.removeItem('options');
    }
  }, {
    key: 'handlePickOptions',
    value: function handlePickOptions() {
      var randomOption = Math.floor(Math.random() * this.state.options.length);
      alert([this.state.options[randomOption]]);
      var pickedOption = this.state.options[randomOption];
    }
  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'handleDeleteOption',
    value: function handleDeleteOption(optionText) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionText !== option;
          })
        };
      });
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(optionValue) {

      var optionLowerCased = this.state.options.map(function (option) {
        return option.toLowerCase();
      });
      if (!optionValue) {
        return 'You need to add an option';
      } else if (optionLowerCased.indexOf(optionValue.toLowerCase()) > -1) {
        return 'That option is already in the list';
      }

      this.setState(function (prevState) {
        return {
          options: [].concat(_toConsumableArray(prevState.options), [optionValue])
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var subtitle = "Putting your life in the hands of a computer!";
      return React.createElement(
        'div',
        { style: wrapperStyle },
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(
          'h3',
          null,
          this.state.options.length ? 'Tasks: ' + this.state.options.length : ''
        ),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePickOptions: this.handlePickOptions
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOption: this.handleDeleteOption,
          handleDeleteOptions: this.handleDeleteOptions }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: [] //['ReactJS', 'Redux', 'NodeJS', 'SASS', 'Gulp', 'Grunt', 'Webpack']
};

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision App'
};
var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { style: buttonStyle, onClick: props.handlePickOptions,
        disabled: !props.hasOptions },
      'What did I do?'
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { style: buttonStyle, onClick: props.handleDeleteOptions },
      props.options.length > 0 ? 'Remove All' : 'No options to remove'
    ),
    props.options.map(function (option, index) {
      return React.createElement(Option, {
        key: index,
        index: index,
        optionText: option,
        handleDeleteOption: props.handleDeleteOption });
    })
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.removeError = _this2.removeError.bind(_this2);
    _this2.onAddOption = _this2.onAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'removeError',
    value: function removeError() {
      this.setState(function () {
        return { error: null };
      });
    }
  }, {
    key: 'onAddOption',
    value: function onAddOption(e) {
      e.preventDefault();
      var optionValue = e.target.elements.optionValue.value.trim();
      var error = this.props.handleAddOption(optionValue);

      this.setState(function () {
        return { error: error };
      });

      if (!error) {
        e.target.elements.optionValue.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          { style: errorStyle },
          this.state.error,
          React.createElement(
            'span',
            { onClick: this.removeError, style: xStyle },
            'x'
          )
        ),
        React.createElement(
          'form',
          { style: clearFix, onSubmit: this.onAddOption },
          React.createElement('input', { type: 'text', name: 'optionValue' }),
          React.createElement(
            'button',
            { type: 'submit' },
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      { style: props.index == 0 ? clearFix : null },
      props.index + 1,
      '. ',
      props.optionText,
      React.createElement(
        'button',
        { style: { backgroundColor: '#d42150', transform: 'scaleX(1.2)', marginLeft: '15px', color: 'white' }, onClick: function onClick(e) {
            return props.handleDeleteOption(props.optionText);
          } },
        'remove'
      )
    )
  );
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
