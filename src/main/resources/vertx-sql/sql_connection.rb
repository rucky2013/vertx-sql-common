require 'vertx/util/utils.rb'
# Generated from io.vertx.ext.sql.SQLConnection
module VertxSql
  #  Represents a connection to a SQL database
  class SQLConnection
    # @private
    # @param j_del [::VertxSql::SQLConnection] the java delegate
    def initialize(j_del)
      @j_del = j_del
    end
    # @private
    # @return [::VertxSql::SQLConnection] the underlying java delegate
    def j_del
      @j_del
    end
    #  Sets the auto commit flag for this connection. True by default.
    # @param [true,false] autoCommit the autoCommit flag, true by default.
    # @yield the handler which is called once this operation completes.
    # @return [self]
    def set_auto_commit(autoCommit=nil)
      if (autoCommit.class == TrueClass || autoCommit.class == FalseClass) && block_given?
        @j_del.java_method(:setAutoCommit, [Java::boolean.java_class,Java::IoVertxCore::Handler.java_class]).call(autoCommit,(Proc.new { |ar| yield(ar.failed ? ar.cause : nil) }))
        return self
      end
      raise ArgumentError, "Invalid arguments when calling set_auto_commit(autoCommit)"
    end
    #  Executes the given SQL statement
    # @param [String] sql the SQL to execute. For example <code>CREATE TABLE IF EXISTS table ...</code>
    # @yield the handler which is called once this operation completes.
    # @return [self]
    def execute(sql=nil)
      if sql.class == String && block_given?
        @j_del.java_method(:execute, [Java::java.lang.String.java_class,Java::IoVertxCore::Handler.java_class]).call(sql,(Proc.new { |ar| yield(ar.failed ? ar.cause : nil) }))
        return self
      end
      raise ArgumentError, "Invalid arguments when calling execute(sql)"
    end
    #  Executes the given SQL <code>SELECT</code> statement which returns the results of the query.
    # @param [String] sql the SQL to execute. For example <code>SELECT * FROM table ...</code>.
    # @yield the handler which is called once the operation completes. It will return a <code>ResultSet</code>.
    # @return [self]
    def query(sql=nil)
      if sql.class == String && block_given?
        @j_del.java_method(:query, [Java::java.lang.String.java_class,Java::IoVertxCore::Handler.java_class]).call(sql,(Proc.new { |ar| yield(ar.failed ? ar.cause : nil, ar.succeeded ? ar.result != nil ? JSON.parse(ar.result.toJson.encode) : nil : nil) }))
        return self
      end
      raise ArgumentError, "Invalid arguments when calling query(sql)"
    end
    #  Executes the given SQL <code>SELECT</code> prepared statement which returns the results of the query.
    # @param [String] sql the SQL to execute. For example <code>SELECT * FROM table ...</code>.
    # @param [Array<String,Object>] params these are the parameters to fill the statement.
    # @yield the handler which is called once the operation completes. It will return a <code>ResultSet</code>.
    # @return [self]
    def query_with_params(sql=nil,params=nil)
      if sql.class == String && params.class == Array && block_given?
        @j_del.java_method(:queryWithParams, [Java::java.lang.String.java_class,Java::IoVertxCoreJson::JsonArray.java_class,Java::IoVertxCore::Handler.java_class]).call(sql,::Vertx::Util::Utils.to_json_array(params),(Proc.new { |ar| yield(ar.failed ? ar.cause : nil, ar.succeeded ? ar.result != nil ? JSON.parse(ar.result.toJson.encode) : nil : nil) }))
        return self
      end
      raise ArgumentError, "Invalid arguments when calling query_with_params(sql,params)"
    end
    #  Executes the given SQL statement which may be an <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code>
    #  statement.
    # @param [String] sql the SQL to execute. For example <code>INSERT INTO table ...</code>
    # @yield the handler which is called once the operation completes.
    # @return [self]
    def update(sql=nil)
      if sql.class == String && block_given?
        @j_del.java_method(:update, [Java::java.lang.String.java_class,Java::IoVertxCore::Handler.java_class]).call(sql,(Proc.new { |ar| yield(ar.failed ? ar.cause : nil, ar.succeeded ? ar.result != nil ? JSON.parse(ar.result.toJson.encode) : nil : nil) }))
        return self
      end
      raise ArgumentError, "Invalid arguments when calling update(sql)"
    end
    #  Executes the given prepared statement which may be an <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code>
    #  statement with the given parameters
    # @param [String] sql the SQL to execute. For example <code>INSERT INTO table ...</code>
    # @param [Array<String,Object>] params these are the parameters to fill the statement.
    # @yield the handler which is called once the operation completes.
    # @return [self]
    def update_with_params(sql=nil,params=nil)
      if sql.class == String && params.class == Array && block_given?
        @j_del.java_method(:updateWithParams, [Java::java.lang.String.java_class,Java::IoVertxCoreJson::JsonArray.java_class,Java::IoVertxCore::Handler.java_class]).call(sql,::Vertx::Util::Utils.to_json_array(params),(Proc.new { |ar| yield(ar.failed ? ar.cause : nil, ar.succeeded ? ar.result != nil ? JSON.parse(ar.result.toJson.encode) : nil : nil) }))
        return self
      end
      raise ArgumentError, "Invalid arguments when calling update_with_params(sql,params)"
    end
    #  Calls the given SQL <code>PROCEDURE</code> which returns the result from the procedure.
    # @param [String] sql the SQL to execute. For example <code>{call getEmpName (?, ?)}</code>.
    # @yield the handler which is called once the operation completes. It will return a <code>ResultSet</code>.
    # @return [self]
    def call(sql=nil)
      if sql.class == String && block_given?
        @j_del.java_method(:call, [Java::java.lang.String.java_class,Java::IoVertxCore::Handler.java_class]).call(sql,(Proc.new { |ar| yield(ar.failed ? ar.cause : nil, ar.succeeded ? ar.result != nil ? JSON.parse(ar.result.toJson.encode) : nil : nil) }))
        return self
      end
      raise ArgumentError, "Invalid arguments when calling call(sql)"
    end
    #  Calls the given SQL <code>PROCEDURE</code> which returns the result from the procedure.
    # 
    #  The index of params and outputs are important for both arrays, for example when dealing with a prodecure that
    #  takes the first 2 arguments as input values and the 3 arg as an output then the arrays should be like:
    # 
    #  <pre>
    #    params = [VALUE1, VALUE2, null]
    #    outputs = [null, null, "VARCHAR"]
    #  </pre>
    # @param [String] sql the SQL to execute. For example <code>{call getEmpName (?, ?)}</code>.
    # @param [Array<String,Object>] params these are the parameters to fill the statement.
    # @param [Array<String,Object>] outputs these are the outputs to fill the statement.
    # @yield the handler which is called once the operation completes. It will return a <code>ResultSet</code>.
    # @return [self]
    def call_with_params(sql=nil,params=nil,outputs=nil)
      if sql.class == String && params.class == Array && outputs.class == Array && block_given?
        @j_del.java_method(:callWithParams, [Java::java.lang.String.java_class,Java::IoVertxCoreJson::JsonArray.java_class,Java::IoVertxCoreJson::JsonArray.java_class,Java::IoVertxCore::Handler.java_class]).call(sql,::Vertx::Util::Utils.to_json_array(params),::Vertx::Util::Utils.to_json_array(outputs),(Proc.new { |ar| yield(ar.failed ? ar.cause : nil, ar.succeeded ? ar.result != nil ? JSON.parse(ar.result.toJson.encode) : nil : nil) }))
        return self
      end
      raise ArgumentError, "Invalid arguments when calling call_with_params(sql,params,outputs)"
    end
    #  Closes the connection. Important to always close the connection when you are done so it's returned to the pool.
    # @yield the handler called when this operation completes.
    # @return [void]
    def close
      if !block_given?
        return @j_del.java_method(:close, []).call()
      elsif block_given?
        return @j_del.java_method(:close, [Java::IoVertxCore::Handler.java_class]).call((Proc.new { |ar| yield(ar.failed ? ar.cause : nil) }))
      end
      raise ArgumentError, "Invalid arguments when calling close()"
    end
    #  Commits all changes made since the previous commit/rollback.
    # @yield the handler called when this operation completes.
    # @return [self]
    def commit
      if block_given?
        @j_del.java_method(:commit, [Java::IoVertxCore::Handler.java_class]).call((Proc.new { |ar| yield(ar.failed ? ar.cause : nil) }))
        return self
      end
      raise ArgumentError, "Invalid arguments when calling commit()"
    end
    #  Rolls back all changes made since the previous commit/rollback.
    # @yield the handler called when this operation completes.
    # @return [self]
    def rollback
      if block_given?
        @j_del.java_method(:rollback, [Java::IoVertxCore::Handler.java_class]).call((Proc.new { |ar| yield(ar.failed ? ar.cause : nil) }))
        return self
      end
      raise ArgumentError, "Invalid arguments when calling rollback()"
    end
    #  Sets a connection wide query timeout.
    # 
    #  It can be over written at any time and becomes active on the next query call.
    # @param [Fixnum] timeoutInSeconds the max amount of seconds the query can take to execute.
    # @return [self]
    def set_query_timeout(timeoutInSeconds=nil)
      if timeoutInSeconds.class == Fixnum && !block_given?
        @j_del.java_method(:setQueryTimeout, [Java::int.java_class]).call(timeoutInSeconds)
        return self
      end
      raise ArgumentError, "Invalid arguments when calling set_query_timeout(timeoutInSeconds)"
    end
    #  Attempts to change the transaction isolation level for this Connection object to the one given.
    # 
    #  The constants defined in the interface Connection are the possible transaction isolation levels.
    # @param [:READ_UNCOMMITTED,:READ_COMMITTED,:REPEATABLE_READ,:SERIALIZABLE,:NONE] isolation the level of isolation
    # @yield the handler called when this operation completes.
    # @return [self]
    def set_transaction_isolation(isolation=nil)
      if isolation.class == Symbol && block_given?
        @j_del.java_method(:setTransactionIsolation, [Java::IoVertxExtSql::TransactionIsolation.java_class,Java::IoVertxCore::Handler.java_class]).call(Java::IoVertxExtSql::TransactionIsolation.valueOf(isolation),(Proc.new { |ar| yield(ar.failed ? ar.cause : nil) }))
        return self
      end
      raise ArgumentError, "Invalid arguments when calling set_transaction_isolation(isolation)"
    end
    #  Attempts to return the transaction isolation level for this Connection object to the one given.
    # @yield the handler called when this operation completes.
    # @return [self]
    def get_transaction_isolation
      if block_given?
        @j_del.java_method(:getTransactionIsolation, [Java::IoVertxCore::Handler.java_class]).call(nil)
        return self
      end
      raise ArgumentError, "Invalid arguments when calling get_transaction_isolation()"
    end
  end
end
