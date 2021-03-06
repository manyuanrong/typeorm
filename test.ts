import {runTests} from "./test/deps/mocha.ts";

// Integration tests
import "./test/integration/sample1-simple-entity.ts";

// Functional tests
import "./test/functional/cascades/cascade-insert-from-both-sides/cascade-insert-from-both-sides.ts";
import "./test/functional/columns/embedded-columns/columns-embedded-columns.ts";
import "./test/functional/columns/getters-setters/columns-getters-setters.ts";
import "./test/functional/columns/no-select/columns-no-select.ts";
import "./test/functional/columns/readonly/columns-readonly.ts";
import "./test/functional/columns/update-insert/columns-update-insert.ts";
import "./test/functional/columns/value-transformer/value-transformer.ts";
import "./test/functional/connection/connection.ts";
import "./test/functional/connection-manager/connection-manager.ts";
import "./test/functional/connection-options-reader/connection-options-reader.ts";
import "./test/functional/cube/postgres/cube-postgres.ts";
import "./test/functional/database-schema/column-collation/cockroach/column-collation-cockroach.ts";
import "./test/functional/database-schema/column-collation/mssql/column-collation-mssql.ts";
import "./test/functional/database-schema/column-collation/mysql/column-collation-mysql.ts";
import "./test/functional/database-schema/column-collation/postgres/column-collation-postgres.ts";
import "./test/functional/database-schema/column-collation/sqlite/column-collation-sqlite.ts";
import "./test/functional/database-schema/column-length/mssql/column-length-mssql.ts";
import "./test/functional/database-schema/column-length/mysql/column-length-mysql.ts";
import "./test/functional/database-schema/column-length/postgres/column-length-postgres.ts";
import "./test/functional/database-schema/column-length/sap/column-length-sap.ts";
import "./test/functional/database-schema/column-length/sqlite/column-length-sqlite.ts";
import "./test/functional/database-schema/column-types/cockroachdb/column-types-cockroach.ts";
import "./test/functional/database-schema/column-types/mssql/column-types-mssql.ts";
import "./test/functional/database-schema/column-types/mysql/column-types-mysql.ts";
import "./test/functional/database-schema/column-types/oracle/column-types-oracle.ts";
import "./test/functional/database-schema/column-types/postgres/column-types-postgres.ts";
import "./test/functional/database-schema/column-types/postgres-enum/postgres-enum.ts";
import "./test/functional/database-schema/column-types/sap/column-types-sap.ts";
import "./test/functional/database-schema/column-types/sqlite/column-types-sqlite.ts";
import "./test/functional/database-schema/column-width/mysql/column-width.ts";
import "./test/functional/database-schema/enums/enums.ts";
import "./test/functional/database-schema/enums-array/enums-array.ts";
import "./test/functional/database-schema/indices/indices-create-modify.ts";
import "./test/functional/database-schema/mssql-parameters/mssql-parameters.ts";
import "./test/functional/database-schema/rowid-column/rowid-column.ts";
import "./test/functional/database-schema/sequences/sequence-create-test.ts";
import "./test/functional/database-schema/simple-enums/enums.ts";
import "./test/functional/database-schema/simple-enums-array/enums-array.ts";
import "./test/functional/decorators/embedded/query-builder-embedded.ts";
import "./test/functional/decorators/relation-count/relation-count-many-to-many/relation-count-decorator-many-to-many.ts";
import "./test/functional/decorators/relation-count/relation-count-one-to-many/relation-count-decorator-one-to-many.ts";
import "./test/functional/decorators/relation-id/relation-id-many-to-many/relation-id-decorator-many-to-many.ts";
import "./test/functional/decorators/relation-id/relation-id-many-to-one/relation-id-decorator-many-to-one.ts";
import "./test/functional/decorators/relation-id/relation-id-one-to-many/relation-id-decorator-one-to-many.ts";
import "./test/functional/decorators/relation-id/relation-id-one-to-one/relation-id-decorator-one-to-one.ts";
import "./test/functional/deferrable/deferrable.ts";
import "./test/functional/driver/convert-to-entity/convert-to-entity.ts";
import "./test/functional/embedded/basic-functionality/basic-functionality.ts";
import "./test/functional/embedded/embedded-listeners/embedded-listeners.ts";
import "./test/functional/embedded/embedded-many-to-many-case1/embedded-many-to-many-case1.ts";
import "./test/functional/embedded/embedded-many-to-many-case2/embedded-many-to-many-case2.ts";
import "./test/functional/embedded/embedded-many-to-many-case3/embedded-many-to-many-case3.ts";
import "./test/functional/embedded/embedded-many-to-many-case4/embedded-many-to-many-case4.ts";
import "./test/functional/embedded/embedded-many-to-many-case5/embedded-many-to-many-case5.ts";
import "./test/functional/embedded/embedded-many-to-one-case1/embedded-many-to-one-case1.ts";
import "./test/functional/embedded/embedded-many-to-one-case2/embedded-many-to-one-case2.ts";
import "./test/functional/embedded/embedded-many-to-one-case3/embedded-many-to-one-case3.ts";
import "./test/functional/embedded/embedded-many-to-one-case4/embedded-many-to-one-case4.ts";
import "./test/functional/embedded/embedded-many-to-one-case5/embedded-many-to-one-case5.ts";
import "./test/functional/embedded/embedded-one-to-one/embedded-one-to-one.ts";
import "./test/functional/embedded/embedded-with-special-columns/embedded-with-special-columns.ts";
import "./test/functional/embedded/multiple-primary-columns/multiple-primary-columns.ts";
import "./test/functional/embedded/multiple-primary-columns-with-nested-embed/multiple-primary-columns-with-nested-embed.ts";
import "./test/functional/embedded/optional-embedded-listeners/optional-embedded-listeners.ts";
import "./test/functional/embedded/outer-primary-column/outer-primary-column.ts";
import "./test/functional/embedded/prefix/embedded-prefix.ts";
import "./test/functional/entity-listeners/entity-listeners.ts";
import "./test/functional/entity-metadata-validator/basic/entity-metadata-validator.ts";
import "./test/functional/entity-metadata-validator/initialized-relations/validator-intialized-relations.ts";
import "./test/functional/entity-model/entity-model.ts";
import "./test/functional/entity-schema/basic/entity-schema-basic.ts";
import "./test/functional/entity-schema/checks/checks-basic.ts";
import "./test/functional/entity-schema/columns/mysql/columns-mysql.ts";
import "./test/functional/entity-schema/exclusions/exclusions-basic.ts";
import "./test/functional/entity-schema/indices/basic/indices-basic.ts";
import "./test/functional/entity-schema/indices/mysql/indices-mysql.ts";
import "./test/functional/entity-schema/target/entity-schema-target.ts";
import "./test/functional/entity-schema/uniques/uniques-basic.ts";
import "./test/functional/indices/basic-unique-index-test/basic-unique-index-test.ts";
import "./test/functional/indices/conditional-index/conditional-index.ts";
import "./test/functional/indices/embeddeds-index-test/embeddeds-unique-index-test.ts";
import "./test/functional/json/jsonb.ts";
import "./test/functional/metadata-builder/column-metadata/column-metadata.ts";
import "./test/functional/metadata-builder/metadata-args-storage/metadata-args-storage.ts";
import "./test/functional/migrations/show-command/command.ts";
import "./test/functional/mongodb/basic/array-columns/mongodb-array-columns.ts";
import "./test/functional/mongodb/basic/embedded-columns/mongodb-embedded-columns.ts";
import "./test/functional/mongodb/basic/embedded-columns-listeners/mongodb-embedded-columns-listeners.ts";
import "./test/functional/mongodb/basic/mongo-embeddeds-index/mongo-embeddeds-index.ts";
import "./test/functional/mongodb/basic/mongo-index/mongo-index.ts";
import "./test/functional/mongodb/basic/mongo-repository/mongo-repository.ts";
import "./test/functional/mongodb/basic/object-id/mongodb-object-id.ts";
import "./test/functional/mongodb/basic/repository-actions/mongodb-repository-actions.ts";
import "./test/functional/mongodb/basic/timestampable-columns/timestampable-columns.ts";
import "./test/functional/multi-schema-and-database/custom-junction-database/custom-junction-database.ts";
import "./test/functional/multi-schema-and-database/custom-junction-schema/custom-junction-schema.ts";
import "./test/functional/multi-schema-and-database/multi-schema-and-database-basic-functionality/multi-schema-and-database-basic-functionality.ts";
import "./test/functional/persistence/basic-functionality/persistence-basic-functionality.ts";
import "./test/functional/persistence/bulk-insert-remove-optimization/bulk-insert-remove-optimization.ts";
import "./test/functional/persistence/cascades/cascades-example1/cascades-example1.ts";
import "./test/functional/persistence/cascades/cascades-example2/cascades-example2.ts";
import "./test/functional/persistence/cascades/cascades-remove/cascades-remove.ts";
import "./test/functional/persistence/custom-column-name-pk/custom-column-name-pk.ts";
import "./test/functional/persistence/custom-column-names/persistence-custom-column-names.ts";
import "./test/functional/persistence/entity-updation/persistence-entity-updation.ts";
import "./test/functional/persistence/insert/update-relation-columns-after-insertion/update-relation-columns-after-insertion.ts";
import "./test/functional/persistence/many-to-many/persistence-many-to-many.ts";
import "./test/functional/persistence/many-to-one-bi-directional/persistence-many-to-one-bi-directional.ts";
import "./test/functional/persistence/many-to-one-uni-directional/persistence-many-to-one-uni-directional.ts";
import "./test/functional/persistence/multi-primary-key/multi-primary-key.ts";
import "./test/functional/persistence/multi-primary-key-on-both-sides/multi-primary-key.ts";
import "./test/functional/persistence/null-and-default-behaviour/null-and-default-behaviour.ts";
import "./test/functional/persistence/one-to-many/persistence-one-to-many.ts";
import "./test/functional/persistence/one-to-one/persistence-one-to-one.ts";
import "./test/functional/persistence/partial-persist/partial-persist.ts";
import "./test/functional/persistence/persistence-options/chunks/persistence-options-chunks.ts";
import "./test/functional/persistence/persistence-options/listeners/persistence-options-listeners.ts";
import "./test/functional/persistence/persistence-options/transaction/persistence-options-transaction.ts";
import "./test/functional/persistence/persistence-order/persistence-order.ts";
import "./test/functional/persistence/remove-topological-order/remove-topolotical-order.ts";
import "./test/functional/query-builder/brackets/query-builder-brackets.ts";
import "./test/functional/query-builder/cache/query-builder-cache.ts";
import "./test/functional/query-builder/delete/query-builder-delete.ts";
import "./test/functional/query-builder/distinct-on/query-builder-distinct-on.ts";
import "./test/functional/query-builder/enabling-transaction/enabling-transaction.ts";
import "./test/functional/query-builder/entity-updation/entity-updation.ts";
import "./test/functional/query-builder/insert/query-builder-insert.ts";
import "./test/functional/query-builder/insert-on-conflict/query-builder-insert-on-conflict.ts";
import "./test/functional/query-builder/join/query-builder-joins.ts";
import "./test/functional/query-builder/locking/query-builder-locking.ts";
import "./test/functional/query-builder/order-by/query-builder-order-by.ts";
import "./test/functional/query-builder/relation-count/relation-count-many-to-many/load-relation-count-and-map-many-to-many.ts";
import "./test/functional/query-builder/relation-count/relation-count-one-to-many/load-relation-count-and-map-one-to-many.ts";
import "./test/functional/query-builder/relation-id/many-to-many/basic-functionality/basic-functionality.ts";
import "./test/functional/query-builder/relation-id/many-to-many/embedded/embedded.ts";
import "./test/functional/query-builder/relation-id/many-to-many/embedded-with-multiple-pk/embedded-with-multiple-pk.ts";
import "./test/functional/query-builder/relation-id/many-to-many/multiple-pk/multiple-pk.ts";
import "./test/functional/query-builder/relation-id/many-to-one/basic-functionality/basic-functionality.ts";
import "./test/functional/query-builder/relation-id/many-to-one/embedded/embedded.ts";
import "./test/functional/query-builder/relation-id/many-to-one/embedded-with-multiple-pk/embedded-with-multiple-pk.ts";
import "./test/functional/query-builder/relation-id/many-to-many/multiple-pk/multiple-pk.ts";
import "./test/functional/query-builder/relation-id/one-to-many/basic-functionality/basic-functionality.ts";
import "./test/functional/query-builder/relation-id/one-to-many/embedded/embedded.ts";
import "./test/functional/query-builder/relation-id/one-to-many/embedded-with-multiple-pk/embedded-with-multiple-pk.ts";
import "./test/functional/query-builder/relation-id/one-to-many/multiple-pk/multiple-pk.ts";
import "./test/functional/query-builder/relation-id/one-to-one/basic-functionality/basic-functionality.ts";
import "./test/functional/query-builder/relation-id/one-to-one/embedded/embedded.ts";
import "./test/functional/query-builder/relation-id/one-to-one/embedded-with-multiple-pk/embedded-with-multiple-pk.ts";
import "./test/functional/query-builder/relation-id/one-to-one/multiple-pk/multiple-pk.ts";
import "./test/functional/query-builder/relational/with-many/query-builder-relational-add-remove-many-to-many-inverse.ts";
import "./test/functional/query-builder/relational/with-many/query-builder-relational-add-remove-many-to-many.ts";
import "./test/functional/query-builder/relational/with-many/query-builder-relational-add-remove-one-to-many.ts";
import "./test/functional/query-builder/relational/with-many/query-builder-relational-load-many.ts";
import "./test/functional/query-builder/relational/with-one/query-builder-relational-load-one.ts";
import "./test/functional/query-builder/relational/with-one/query-builder-relational-set-many-to-one.ts";
import "./test/functional/query-builder/relational/with-one/query-builder-relational-set-one-to-one-inverse.ts";
import "./test/functional/query-builder/relational/with-one/query-builder-relational-set-one-to-one.ts";
import "./test/functional/query-builder/select/query-builder-select.ts";
import "./test/functional/query-builder/subquery/query-builder-subquery.ts";
import "./test/functional/query-builder/update/query-builder-update.ts";
import "./test/functional/query-runner/add-column.ts";
import "./test/functional/query-runner/change-column.ts";
import "./test/functional/query-runner/create-and-drop-database.ts";
import "./test/functional/query-runner/create-and-drop-schema.ts";
import "./test/functional/query-runner/create-check-constraint.ts";
import "./test/functional/query-runner/create-exclusion-constraint.ts";
import "./test/functional/query-runner/create-foreign-key.ts";
import "./test/functional/query-runner/create-index.ts";
import "./test/functional/query-runner/create-primary-key.ts";
import "./test/functional/query-runner/create-table.ts";
import "./test/functional/query-runner/create-unique-constraint.ts";
import "./test/functional/query-runner/drop-check-constraint.ts";
import "./test/functional/query-runner/drop-column.ts";
import "./test/functional/query-runner/drop-exclusion-constraint.ts";
import "./test/functional/query-runner/drop-foreign-key.ts";
import "./test/functional/query-runner/drop-index.ts";
import "./test/functional/query-runner/drop-primary-key.ts";
import "./test/functional/query-runner/drop-table.ts";
import "./test/functional/query-runner/drop-unique-constraint.ts";
import "./test/functional/query-runner/rename-column.ts";
import "./test/functional/query-runner/rename-table.ts";
import "./test/functional/relations/custom-referenced-column-name/custom-referenced-column-name.ts";
import "./test/functional/relations/eager-relations/basic-eager-relations/basic-eager-relations.ts";
import "./test/functional/relations/eager-relations/circular-eager-relations/circular-eager-relations.ts";
import "./test/functional/relations/lazy-relations/basic-lazy-relation/basic-lazy-relations.ts";
import "./test/functional/relations/lazy-relations/named-columns/named-columns-lazy-relations.ts";
import "./test/functional/relations/lazy-relations/named-tables/named-tables-lazy-relations.ts";
import "./test/functional/relations/lazy-relations/named-tables-and-columns/named-tables-and-columns-lazy-relations.ts";
import "./test/functional/relations/multiple-primary-keys/multiple-primary-keys-many-to-many/multiple-primary-keys-many-to-many.ts";
import "./test/functional/relations/multiple-primary-keys/multiple-primary-keys-many-to-one/multiple-primary-keys-many-to-one.ts";
import "./test/functional/relations/multiple-primary-keys/multiple-primary-keys-one-to-one/multiple-primary-keys-one-to-one.ts";
import "./test/functional/relations/multiple-primary-keys/multiple-primary-keys-other-cases/multiple-primary-keys-other-cases.ts";
import "./test/functional/relations/relation-mapped-to-different-name-column/relation-mapped-to-different-name-column.ts";
import "./test/functional/relations/relation-with-primary-key/relation-with-primary-key.ts";
import "./test/functional/repository/basic-methods/repository-basic-methods.ts";
import "./test/functional/repository/clear/repository-clear.ts";
import "./test/functional/repository/decrement/repository-decrement.ts";
import "./test/functional/repository/delete-by-id-and-ids/repository-remove-by-id-and-ids.ts";
import "./test/functional/repository/find-methods/repostiory-find-methods.ts";
import "./test/functional/repository/find-options/repository-find-options.ts";
import "./test/functional/repository/find-options-locking/find-options-locking.ts";
import "./test/functional/repository/find-options-operators/repository-find-operators.ts";
import "./test/functional/repository/find-options-relations/repository-find-options-relations.ts";
import "./test/functional/repository/increment/repository-increment.ts";
import "./test/functional/repository/set-add-remove-relations/repository-set-add-remove-relations.ts";
import "./test/functional/schema-builder/add-column.ts";
import "./test/functional/schema-builder/change-check-constraint.ts";
import "./test/functional/schema-builder/change-column.ts";
import "./test/functional/schema-builder/change-exclusion-constraint.ts";
import "./test/functional/schema-builder/change-index.ts";
import "./test/functional/schema-builder/change-unique-constraint.ts";
import "./test/functional/schema-builder/create-foreign-key.ts";
import "./test/functional/schema-builder/create-table.ts";
import "./test/functional/schema-builder/custom-db-and-schema-sync.ts";
import "./test/functional/schema-builder/drop-column.ts";
import "./test/functional/schema-builder/update-primary-keys.ts";
import "./test/functional/spatial/postgres/spatial-postgres.ts";
import "./test/functional/sqljs/auto-save.ts";
import "./test/functional/sqljs/load.ts";
import "./test/functional/sqljs/save.ts";
import "./test/functional/sqljs/startup.ts";
import "./test/functional/table-inheritance/extending/extending-inheritance.ts";
import "./test/functional/table-inheritance/single-table/basic-functionality/basic-functionality.ts";
import "./test/functional/table-inheritance/single-table/database-option-inherited/database-option-inherited.ts";
import "./test/functional/table-inheritance/single-table/non-virtual-discriminator-column/non-virtual-discriminator-column.ts";
import "./test/functional/table-inheritance/single-table/relations/many-to-many/many-to-many.ts";
import "./test/functional/table-inheritance/single-table/relations/one-to-many/one-to-many.ts";
import "./test/functional/transaction/database-specific-isolation/full-isolation-support.ts";
import "./test/functional/transaction/database-specific-isolation/oracle-isolation.ts";
import "./test/functional/transaction/database-specific-isolation/sqlite-isolation.ts";
import "./test/functional/transaction/return-data-from-transaction/return-data-from-transaction.ts";
import "./test/functional/transaction/single-query-runner/single-query-runner.ts";
import "./test/functional/transaction/transaction-decorator/transaction-decorator.ts";
import "./test/functional/transaction/transaction-in-entity-manager/transaction-in-entity-manager.ts";
import "./test/functional/tree-tables/closure-table/closure-table.ts";
import "./test/functional/tree-tables/materialized-path/materialized-path.ts";
import "./test/functional/tree-tables/nested-set/nested-set.ts";
import "./test/functional/uuid/cockroach/uuid-cockroach.ts";
import "./test/functional/uuid/mssql/uuid-mssql.ts";
import "./test/functional/uuid/mysql/uuid-mysql.ts";
import "./test/functional/uuid/oracle/uuid-oracle.ts";
import "./test/functional/uuid/postgres/pgcrypto.ts";
import "./test/functional/uuid/postgres/uuid-ossp.ts";
import "./test/functional/uuid/sap/uuid-sap.ts";
import "./test/functional/uuid/sqlite/uuid-sqlite.ts";
import "./test/functional/view-entity/general/view-entity-general.ts";
import "./test/functional/view-entity/mssql/view-entity-mssql.ts";
import "./test/functional/view-entity/mysql/view-entity-mysql.ts";
import "./test/functional/view-entity/oracle/view-entity-oracle.ts";
import "./test/functional/view-entity/postgres/view-entity-postgres.ts";
import "./test/functional/view-entity/sqlite/view-entity-sqlite.ts";

// Tests for github-issues
import "./test/github-issues/47/issue-47.ts";
import "./test/github-issues/56/issue-56.ts";
import "./test/github-issues/57/issue-57.ts";
import "./test/github-issues/58/issue-58.ts";
import "./test/github-issues/70/issue-70.ts";
import "./test/github-issues/71/issue-71.ts";
import "./test/github-issues/80/issue-80.ts";
import "./test/github-issues/85/issue-85.ts";
import "./test/github-issues/108/issue-108.ts";
import "./test/github-issues/114/issue-114.ts";
import "./test/github-issues/131/issue-131.ts";
import "./test/github-issues/134/issue-134.ts";
import "./test/github-issues/151/issue-151.ts";
import "./test/github-issues/161/issue-161.ts";
import "./test/github-issues/163/issue-163.ts";
import "./test/github-issues/174/issue-174.ts";
import "./test/github-issues/175/issue-175.ts";
import "./test/github-issues/176/issue-176.ts";
import "./test/github-issues/182/issue-182.ts";
import "./test/github-issues/184/issue-184.ts";
import "./test/github-issues/190/issue-190.ts";
import "./test/github-issues/197/issue-197.ts";
import "./test/github-issues/204/issue-204.ts";
import "./test/github-issues/211/issue-211.ts";
import "./test/github-issues/215/issue-215.ts";
import "./test/github-issues/219/issue-219.ts";
import "./test/github-issues/234/issue-234.ts";
import "./test/github-issues/300/issue-300.ts";
import "./test/github-issues/306/issue-306.ts";
import "./test/github-issues/320/issue-320.ts";
import "./test/github-issues/341/issue-341.ts";
import "./test/github-issues/345/issue-345.ts";
import "./test/github-issues/352/issue-352.ts";
import "./test/github-issues/363/issue-363.ts";
import "./test/github-issues/388/issue-388.ts";
import "./test/github-issues/401/issue-401.ts";
import "./test/github-issues/423/issue-423.ts";
import "./test/github-issues/433/issue-433.ts";
import "./test/github-issues/438/issue-438.ts";
import "./test/github-issues/463/issue-463.ts";
import "./test/github-issues/479/issue-479.ts";
import "./test/github-issues/485/issue-485.ts";
import "./test/github-issues/493/issue-493.ts";
import "./test/github-issues/495/issue-495.ts";
import "./test/github-issues/499/issue-499.ts";
import "./test/github-issues/512/issue-512.ts";
import "./test/github-issues/513/issue-513.ts";
import "./test/github-issues/521/issue-521.ts";
import "./test/github-issues/587/issue-587.ts";
import "./test/github-issues/594/issue-594.ts";
import "./test/github-issues/609/issue-609.ts";
import "./test/github-issues/620/issue-620.ts";
import "./test/github-issues/660/issue-660.ts";
import "./test/github-issues/695/issue-695.ts";
import "./test/github-issues/703/issue-703.ts";
import "./test/github-issues/704/issue-704.ts";
import "./test/github-issues/720/issue-720.ts";
import "./test/github-issues/736/issue-736.ts";
import "./test/github-issues/750/issue-750.ts";
import "./test/github-issues/752/issue-752.ts";
import "./test/github-issues/762/issue-762.ts";
import "./test/github-issues/773/issue-773.ts";
import "./test/github-issues/778/issue-778.ts";
import "./test/github-issues/798/issue-798.ts";
import "./test/github-issues/799/issue-799.ts";
import "./test/github-issues/807/issue-807.ts";
import "./test/github-issues/813/issue-813.ts";
import "./test/github-issues/815/issue-815.ts";
import "./test/github-issues/836/issue-836.ts";
import "./test/github-issues/838/issue-838.ts";
import "./test/github-issues/863/issue-863.ts";
import "./test/github-issues/867/issue-867.ts";
import "./test/github-issues/904/issue-904.ts";
import "./test/github-issues/922/issue-922.ts";
import "./test/github-issues/929/issue-929.ts";
import "./test/github-issues/945/issue-945.ts";
import "./test/github-issues/948/issue-948.ts";
import "./test/github-issues/953/issue-953.ts";
import "./test/github-issues/966/issue-966.ts";
import "./test/github-issues/970/issue-970.ts";
import "./test/github-issues/996/issue-996.ts";
import "./test/github-issues/1014/issue-1014.ts";
import "./test/github-issues/1034/issue-1034.ts";
import "./test/github-issues/1042/issue-1042.ts";
import "./test/github-issues/1055/issue-1055.ts";
import "./test/github-issues/1089/issue-1089.ts";
import "./test/github-issues/1099/issue-1099.ts";
import "./test/github-issues/1113/issue-1113.ts";
import "./test/github-issues/1118/issue-1118.ts";
import "./test/github-issues/1123/issue-1123.ts";
import "./test/github-issues/1139/issue-1139.ts";
import "./test/github-issues/1140/issue-1140.ts";
import "./test/github-issues/1147/issue-1147.ts";
import "./test/github-issues/1178/issue-1178.ts";
import "./test/github-issues/1210/issue-1210.ts";
import "./test/github-issues/1233/issue-1233.ts";
import "./test/github-issues/1245/issue-1245.ts";
import "./test/github-issues/1259/issue-1259.ts";
import "./test/github-issues/1261/issue-1261.ts";
import "./test/github-issues/1282/issue-1282.ts";
import "./test/github-issues/1308/issue-1308.ts";
import "./test/github-issues/1314/issue-1314.ts";
import "./test/github-issues/1326/issue-1326.ts";
import "./test/github-issues/1369/issue-1369.ts";
import "./test/github-issues/1377/issue-1377.ts";
import "./test/github-issues/1388/issue-1388.ts";
import "./test/github-issues/1397/issue-1397.ts";
import "./test/github-issues/1416/issue-1416.ts";
import "./test/github-issues/1427/issue-1427.ts";
import "./test/github-issues/1465/save-relation.ts";
import "./test/github-issues/1476/issue-1476.ts";
import "./test/github-issues/1493/issue-1493.ts";
import "./test/github-issues/1504/issue-1504.ts";
import "./test/github-issues/1510/issue-1510.ts";
import "./test/github-issues/1545/issue-1545.ts";
import "./test/github-issues/1551/issue-1551.ts";
import "./test/github-issues/1569/issue-1569.ts";
import "./test/github-issues/1576/issue-1576.ts";
import "./test/github-issues/1581/issue-1581.ts";
import "./test/github-issues/1584/issue-1584.ts";
import "./test/github-issues/1591/issue-1591.ts";
import "./test/github-issues/1600/issue-1600.ts";
import "./test/github-issues/1615/issue-1615.ts";
import "./test/github-issues/1623/issue-1623.ts";
import "./test/github-issues/1652/issue-1652.ts";
import "./test/github-issues/1656/issue-1656.ts";
import "./test/github-issues/1680/issue-1680.ts";
import "./test/github-issues/1685/issue-1685.ts";
import "./test/github-issues/1703/issue-1703.ts";
import "./test/github-issues/1716/issue-1716.ts";
import "./test/github-issues/1720/issue-1720.ts";
import "./test/github-issues/1733/issue-1733.ts";
import "./test/github-issues/1748/issue-1748.ts";
import "./test/github-issues/1749/issue-1749.ts";
import "./test/github-issues/1751/issue-1751.ts";
import "./test/github-issues/1754/issue-1754.ts";
import "./test/github-issues/1758/issue-1758.ts";
import "./test/github-issues/1780/issue-1780.ts";
import "./test/github-issues/1788/issue-1788.ts";
import "./test/github-issues/1805/issue-1805.ts";
import "./test/github-issues/1825/issue-1825.ts";
import "./test/github-issues/1839/issue-1839.ts";
import "./test/github-issues/1863/issue-1863.ts";
import "./test/github-issues/1883/issue-1883.ts";
import "./test/github-issues/1887/issue-1887.ts";
import "./test/github-issues/1898/issue-1898.ts";
import "./test/github-issues/1901/issue-1901.ts";
import "./test/github-issues/1909/issue-1909.ts";
import "./test/github-issues/1926/issue-1926.ts";
import "./test/github-issues/1929/issue-1929.ts";
import "./test/github-issues/1960/issue-1960.ts";
import "./test/github-issues/1972/issue-1972.ts";
import "./test/github-issues/1981/issue-1981.ts";
import "./test/github-issues/1997/issue-1997.ts";
import "./test/github-issues/2005/issue-2005.ts";
import "./test/github-issues/2006/issue-2006.ts";
import "./test/github-issues/2031/issue-2031.ts";
import "./test/github-issues/2044/issue-2044.ts";
import "./test/github-issues/2067/issue-2067.ts";
import "./test/github-issues/2103/issue-2103.ts";
import "./test/github-issues/2128/issue-2128.ts";
import "./test/github-issues/2147/issue-2147.ts";
import "./test/github-issues/2199/issue-2199.ts";
import "./test/github-issues/2200/issue-2200.ts";
import "./test/github-issues/2201/issue-2201.ts";
import "./test/github-issues/2251/issue-2251.ts";
import "./test/github-issues/2253/issue-2253.ts";
import "./test/github-issues/2259/issue-2259.ts";
import "./test/github-issues/2287/issue-2287.ts";
import "./test/github-issues/2313/issue-2313.ts";
import "./test/github-issues/2364/issue-2364.ts";
import "./test/github-issues/2464/issue-2464.ts";
import "./test/github-issues/2499/issue-2499.ts";
import "./test/github-issues/2518/issue-2518.ts";
import "./test/github-issues/2557/issue-2557.ts";
import "./test/github-issues/2632/issue-2632.ts";
import "./test/github-issues/2693/issue-2693.ts";
import "./test/github-issues/2733/issue-2733.ts";
import "./test/github-issues/2737/issue-2737.ts";
import "./test/github-issues/2779/issue-2779.ts";
import "./test/github-issues/2800/issue-2800.ts";
import "./test/github-issues/2871/issue-2871.ts";
import "./test/github-issues/2875/issue-2875.ts";
import "./test/github-issues/2965/index.ts";
import "./test/github-issues/3047/issue-3047.ts";
import "./test/github-issues/3112/issue-3112.ts";
import "./test/github-issues/3118/issue-3118.ts";
import "./test/github-issues/3142/issue-3142.ts";
import "./test/github-issues/3151/issue-3151.ts";
import "./test/github-issues/3158/issue-3158.ts";
import "./test/github-issues/3256/issue-3256.ts";
import "./test/github-issues/3349/issue-3349.ts";
import "./test/github-issues/3350/issue-3350.ts";
import "./test/github-issues/3352/issue-3352.ts";
import "./test/github-issues/3363/issue-3363.ts";
import "./test/github-issues/3374/issue-3374.ts";
import "./test/github-issues/3379/issue-3379.ts";
import "./test/github-issues/3395/issue-3395.ts";
import "./test/github-issues/3422/issue-3422.ts";
import "./test/github-issues/3496/issue-3496.ts";
import "./test/github-issues/3536/issue-3536.ts";
import "./test/github-issues/3551/issue-3551.ts";
import "./test/github-issues/3587/issue-3587.ts";
import "./test/github-issues/3588/issue-3588.ts";
import "./test/github-issues/3604/issue-3604.ts";
import "./test/github-issues/3654/issue-3654.ts";
import "./test/github-issues/3694/issue-3694.ts";
import "./test/github-issues/3702/issue-3702.ts";
import "./test/github-issues/3737/issue-3737.ts";
import "./test/github-issues/3783/issue-3783.ts";
import "./test/github-issues/3803/issue-3803.ts";
import "./test/github-issues/3828/issue-3828.ts";
import "./test/github-issues/3847/issue-3847.ts";
import "./test/github-issues/3857/issue-3857.ts";
import "./test/github-issues/3946/issue-3946.ts";
import "./test/github-issues/3949/issue-3949.ts";
import "./test/github-issues/4096/issue-4096.ts";
import "./test/github-issues/4106/issue-4106.ts";
import "./test/github-issues/4156/issue-4156.ts";
import "./test/github-issues/4185/issue-4185.ts";
import "./test/github-issues/4190/issue-4190.ts";
import "./test/github-issues/4219/issue-4219.ts";
import "./test/github-issues/4220/issue-4220.ts";
import "./test/github-issues/4440/issue-4440.ts";
import "./test/github-issues/4513/issue-4513.ts";
import "./test/github-issues/4570/issue-4570.ts";
import "./test/github-issues/4630/issue-4630.ts";
import "./test/github-issues/4697/issue-4697.ts";
import "./test/github-issues/4701/issue-4701.ts";
import "./test/github-issues/4719/issue-4719.ts";
import "./test/github-issues/4753/issue-4753.ts";
import "./test/github-issues/4782/issue-4782.ts";
import "./test/github-issues/4842/issue-4842.ts";
import "./test/github-issues/5004/issue-5004.ts";
import "./test/github-issues/5174/issue-5174.ts";

// Tests for other issues
import "./test/other-issues/column-getters/column-getters.ts";
import "./test/other-issues/ekifox-increment-issue/ekifox-increment-issue.ts";
import "./test/other-issues/entity-change-in-listeners/entity-change-in-listeners.ts";
import "./test/other-issues/entity-change-in-subscribers/entity-change-in-subscribers.ts";
import "./test/other-issues/escaping-function-parameter/escaping-function-parameter.ts";
import "./test/other-issues/hydrate-performance/hydrate-performance.ts";
import "./test/other-issues/inheritance-duplicate-columns/inheritance-duplicate-columns.ts";
import "./test/other-issues/join-empty-relations/join-empty-relations.ts";
import "./test/other-issues/limit-with-order-by/limit-with-order-by.ts";
import "./test/other-issues/mongodb-entity-change-in-listeners/mongodb-entity-change-in-listeners.ts";
import "./test/other-issues/mongodb-entity-change-in-subscribers/mongodb-entity-change-in-subscribers.ts";
import "./test/other-issues/mssql-add-column-with-default-value/mssql-add-column-with-default-value.ts";
import "./test/other-issues/nested-child-entities/nested-child-entities.ts";
import "./test/other-issues/preventing-injection/preventing-injection.ts";
import "./test/other-issues/take-multiple-pk/take-multiple-pk.ts";
import "./test/other-issues/update-relational-column-on-relation-change/update-relational-column-on-relation-change.ts";

runTests();
