# 🌎 Demask Subgraph
TheGraph exposes a GraphQL endpoint to query the events and entities within the Demask ecosystem.

Currently, there are multiple subgraphs about Mumbai and Chapel network.

## Subgraphs

1. **[Mumbai](https://thegraph.com/hosted-service/subgraph/nguyenphananhthien0210/subgraph_mumbai)**: Tracks all events and entities Demask on Mumbai network.
    - Mumbai https://api.thegraph.com/subgraphs/name/nguyenphananhthien0210/subgraph_mumbai


2. **[Chapel](https://thegraph.com/hosted-service/subgraph/nguyenphananhthien0210/demask-v2-chapel)**: Tracks all events and entities Demask on Chapel network.
    - Chapel https://api.thegraph.com/subgraphs/name/nguyenphananhthien0210/demask-v2-chapel

## Dependencies

- [Graph CLI](https://github.com/graphprotocol/graph-cli)
    - Required to generate and build local GraphQL dependencies.


Install with yarn:

```shell
yarn global add @graphprotocol/graph-cli
```
Install with npm:
```shell
npm install -g @graphprotocol/graph-cli
```

## Initialize

```shell
graph init --product hosted-service <GITHUB_ACCOUNT>/<DIRECTORY>
```

## Deployment

For hosted service of the subgraph:

1. Run the `cd <DIRECTORY>` command to move to the subgraph directory.

2. Run the `graph codegen` command to prepare the TypeScript sources for the GraphQL (generated/*).

3. Run the `graph build` command to build the subgraph, and check compilation errors before deploying.

4. Run `graph auth --product hosted-service '<ACCESS_TOKEN>'` command to authenticate with your deploy key.

5. Deploy via `graph deploy --product hosted-service <GITHUB_ACCOUNT_USER>/<DIRECTORY>`.

