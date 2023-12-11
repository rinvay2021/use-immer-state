### use-immer-state


A hook of management React state with built-in immer

### API

#### useImmerState

和 `useState` 用法相似，`useImmerState` 入参是一个对象，返回这个对象 以及操作对象的两个方法 `dispatchSet、dispatchGet`

```javascript
const [state, { dispatchGet, dispatchSet }] = useImmerState({
  name: "rinvay",
  age: 18,
  skills: ["js", "react"],
  links: {
    qq: "123",
    wechat: "rinvay123",
  },
});
```

##### 下面展示如何更新常用的变量的状态

普通对象更新， 下面演示更新 `state` 中 `name` 和 `age` 属性

```javascript
const updateInfo = () => {
  dispatchSet({
    name: "rinvay",
    age: state.age + 1,
  });
};
```

嵌套对象更新，下面演示更新 `state.links.qq` 属性

```javascript
const updateQQ = () => {
  dispatchSet({
    ["links.qq"]: "12345678",
  });
};
```

数组如何更新

```javascript
const subSkills = () => {
  const updateSkills = [...state.skills];
  updateSkills.pop();

  dispatchSet({
    skills: updateSkills,
  });
};

const addSkills = () => {
  const updateSkills = [...state.skills];
  updateSkills.push("go", "rust");

  dispatchSet({
    skills: updateSkills,
  });
};
```

获取数据的两种方法

1、直接从 `state` 上直接获取，比如 `state.age`。

2、通过 `dispatchGet` 方法获取，该方法接收三个参数，依次是

- `path`： 目标属性的路径 。
- `defaultValue`：当获取到值为 `undefined` 的时候会返回这个传入的 `defaultValue` 。
- `handle`: 返回值会经过这个方法执行之后再返回 <br/>

示例一

```javascript
// 获取对象中的 skills，不存在的时候返回空数组，并将每个技能加上 plus 后缀
const handle = (skills) => skills.map((skill) => skill + "plus");
const res = dispatchGet("skills", [], handle);
```

示例二

```jsx
// 获取 age 的两种方法
<div>{state.age}</div>
<div>{dispatchGet("age")}</div>
```

#### useImmerReducer

```jsx
import React from "react";
import { useImmerReducer } from "@rinvay/use-immer-state";

const initialState = { count: 0 };

function reducer(draft, action) {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return void draft.count++;
    case "decrement":
      return void draft.count--;
  }
}

function Counter() {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
```

### 完整示例

```jsx
import React from "react";
import useImmerState from "@rinvay/use-immer-state";

function App() {
  const [state, { dispatchGet, dispatchSet }] = useImmerState({
    name: "rinvay",
    age: 18,
    skills: ["js", "react"],
    links: {
      qq: "123",
      wechat: "rinvay123",
    },
  });

  //#region 普通对象更新
  const updateInfo = () => {
    dispatchSet({
      name: "rinvay",
      age: state.age + 1,
    });
  };
  //#endregion

  //#region 嵌套对象更新
  const updateQQ = () => {
    dispatchSet({
      ["links.qq"]: "12345678",
    });
  };
  //#endregion

  //#region 数组更新
  const subSkills = () => {
    const updateSkills = [...state.skills];
    updateSkills.pop();

    dispatchSet({
      skills: updateSkills,
    });
  };

  const addSkills = () => {
    const updateSkills = [...state.skills];
    updateSkills.push("go", "rust");

    dispatchSet({
      skills: updateSkills,
    });
  };
  //#endregion

  // 获取数据的两种方法，1、dispatchGet方法获取 2、从 state 上直接获取
  return (
    <div className="App">
      <div>{state.name}</div>
      <div>{state.age}</div>
      <div>{dispatchGet("age")}</div>
      <button onClick={updateInfo}>click me</button>
      <div>{dispatchGet("links.qq")}</div>
      <div>{state.links.qq}</div>
      <button onClick={updateQQ}>update qq</button>
      <div>
        {state.skills.map((skill) => (
          <span>{skill} | </span>
        ))}
        <div>dispatchGet!!!</div>
        {dispatchGet("skills", []).map((skill) => (
          <span>{skill} | </span>
        ))}
      </div>
      <button onClick={addSkills}>addSkills</button>
      <button onClick={subSkills}>subSkills</button>
    </div>
  );
}

export default App;
```
