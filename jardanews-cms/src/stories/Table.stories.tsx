import { Story, Meta } from "@storybook/react";
import Table from "../components/Table/Table";
import { mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
import { useMemo } from "react";
import { Column, useTable } from "react-table";

export default {
  title: "Simple/Table",
  component: Table,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

// const Template: Story<{}> = (args) => <Table {...args} />;

// export const Default = Template.bind({});
// Default.args = {};

type Data = {
  preview: React.ReactNode;
  col1: string;
  col2: string;
  actions: string;
};

export function Default() {
  const data = useMemo<Data[]>(
    () => [
      {
        col1: "Hello",
        col2: "World",
        actions: "Ações",
        preview: <Icon path={mdiOpenInNew} size={"14px"} color="#09f" />,
      },
      {
        col1: "react-table",
        col2: "rocks",
        actions: "Ações",
        preview: <Icon path={mdiOpenInNew} size={"14px"} color="#09f" />,
      },
      {
        col1: "whatever",
        col2: "you want",
        actions: "Ações",
        preview: <Icon path={mdiOpenInNew} size={"14px"} color="#09f" />,
      },
    ],
    []
  );

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        Header: "",
        accessor: "preview", // accessor is the "key" in the data
      },
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
        width: 320,
        Cell: (props) => (
          <div style={{ textAlign: "right" }}>{props.value}</div>
        ),
      },
      {
        Header: "Column 2",
        accessor: "col2",
        Cell: (props) => (
          <div style={{ textAlign: "center" }}>{props.value}</div>
        ),
      },
      {
        Header: "Ações",
        accessor: "actions",
      },
    ],
    []
  );

  const instance = useTable<Data>({ data, columns });

  return <Table<Data> instance={instance} />;
}

type Post = {
  id: number;
  title: string;
  views: number;
  author: {
    name: string;
    avatar: string;
  };
  conversions: {
    thousands: number;
    percentage: number;
  };
};

export function Post() {
  const data = useMemo<Post[]>(
    () => [
      {
        author: {
          name: "Daniel Bonifacio",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU",
        },
        id: 1,
        conversions: {
          percentage: 64.35,
          thousands: 607,
        },
        title: "Como dobrei meu salário aprendendo somente React",
        views: 985415,
      },
      {
        author: {
          name: "Daniel Bonifacio",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU",
        },
        id: 2,
        conversions: {
          percentage: 64.35,
          thousands: 607,
        },
        title: "React.js vs. React Native: a REAL diferença entre os dois",
        views: 985415,
      },
      {
        author: {
          name: "Daniel Bonifacio",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU",
        },
        id: 3,
        conversions: {
          percentage: 95.35,
          thousands: 845,
        },
        title: "Como dobrei meu salário aprendendo somente React",
        views: 985415,
      },
    ],
    []
  );

  const columns = useMemo<Column<Post>[]>(
    () => [
      {
        Header: "",
        accessor: "id", // accessor is the "key" in the data
        Cell: () => <Icon path={mdiOpenInNew} size="14px" color="#09f" />,
      },
      {
        Header: () => <div style={{ textAlign: "left" }}>Artigo</div>,
        accessor: "title", // accessor is the "key" in the data
        width: 320,
        Cell: (props) => (
          <div
            style={{
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <img
              width={"24px"}
              height={"24px"}
              src={props.row.original.author.avatar}
              alt={props.row.original.author.name}
            ></img>
            {props.value}
          </div>
        ),
      },
      {
        Header: () => <div style={{ textAlign: "right" }}>Views</div>,
        accessor: "views",
        Cell: (props) => (
          <div
            style={{
              textAlign: "right",
              fontWeight: 700,
              fontFamily: '"Roboto mono", monospace',
            }}
          >
            {props.value.toLocaleString("pt-br")}
          </div>
        ),
      },
      {
        Header: () => <div style={{ textAlign: "left" }}>Conversões</div>,
        accessor: "conversions",
        Cell: (props) => (
          <div
            style={{
              textAlign: "right",
              display: "flex",
              gap: "8px",
              fontWeight: 700,
              fontFamily: '"Roboto mono", monospace',
            }}
          >
            <span>{props.value.thousands}k</span>
            <span style={{ color: "#09f" }}>{props.value.percentage}%</span>
          </div>
        ),
      },
      {
        id: Math.random().toString(),
        Header: () => <div style={{ textAlign: "right" }}>Ações</div>,
        Cell: () => (
          <div
            style={{
              textAlign: "right",
            }}
          >
            para fazer
          </div>
        ),
      },
    ],
    []
  );

  const instance = useTable<Post>({ data, columns });

  return <Table<Post> instance={instance} />;
}
