import { Component, ChangeEvent } from "react";

interface User {
  name: string;
  age: number;
}

interface FindNameProps {
  users: User[];
}

interface FindNameState {
  name: string;
  user: User | undefined;
}


class FindNameGameClass extends Component<FindNameProps> {
  state: FindNameState = {
    name: "",
    user: undefined,
  };

  onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value });
  };

  onFindVal = () => {
    const { name } = this.state;
    const foundeduser = this.props.users.find(
      (user: { name: string; age: number }) => {
        return user.name === name;
      }
    );
    this.setState({ user: foundeduser });
  };

  render() {
    const { name, user } = this.state;
    const { onChangeName, onFindVal } = this;
    return (
      <div>
        <input onChange={onChangeName} value={name} />
        <button onClick={onFindVal}>Find</button>
        {user && <div>{user.name}</div>}
      </div>
    );
  }
}

export { FindNameGameClass };
