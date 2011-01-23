# @author Daniel Schmidt
# Nothing more than a little enhancement of the default RAILS_LOGGER.
#
# Usage:
# <code>
#  def create
#    log_this("user #{@user.name} created.")
#  end
# </code>
# 
# Default log level is DEBUG.
# It's changeable as the second param:
#  
# <code>
#   log_this(message,:error)
#   log_this(message,:info) 
# </code>
module Logger::TextwerkLogger
  
  def self.included(base)
    base.send(:include, InstanceMethods)
    base.send(:extend, ClassMethods)
  end
  
  module Mutual
  
    def self.log_this(message,level=:debug)
      logger = RAILS_DEFAULT_LOGGER
      logger.send(level, message)
    rescue NoMethodError
      logger.send(:fatal, "Unknown log level given here! ")
    end
  
  end
  
  
  module InstanceMethods
    
    def log_this(message,level=:debug)
      id = self.class.superclass.to_s.eql?("ActiveRecord::Base") ? self.id : self.object_id
      #id = self.respond_to?(:) ? self.id : "no id"
      caller_stage = 1
      message = "[#{level.to_s.upcase}] - #{message} - #{self.class.name} ID: #{id}  - #{caller(0)[caller_stage]}"
      Logger::TextwerkLogger::Mutual::log_this(message,level)
    end
    
  end
  
  module ClassMethods
    
    def log_this(message,level=:debug)
      caller_stage = 2
      message = "[#{level.to_s.upcase}] - #{message} - #{self.name} - #{caller(0)[caller_stage]}"
      Logger::TextwerkLogger::Mutual::log_this(message,level)
    end
    
  end
  
  
end