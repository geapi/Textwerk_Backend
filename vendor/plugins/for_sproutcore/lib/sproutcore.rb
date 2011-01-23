module Sproutcore
  
  module Errors
    
    class NotAnArrayArgumentArror < StandardError; end
    
    class NotSproutcoredError < StandardError; end
    
  end
  
  module Controller
    
    def self.included(base)
      base.send(:include,InstanceMethods)
    end
    
    module InstanceMethods
      
      def json_for_object(obj)
        raise Sproutcore::Errors::NotSproutcoredError, "not a sproutcored model" unless obj.methods.include?("sproutcore_attributes")
        path = obj.class.name.underscore
        json = {}
        obj.sproutcore_attributes.each do |attribute|
          json.store(attribute.to_sym,obj.send(attribute))
        end 
        return json
      end
        
      def mapped_json(obj)
        obj.map{|o| json_for_object(o)}
      end  
      
    end
    
    
  end
  
  module Model
    
    def self.included(base)
      base.send(:include, InstanceMethods)
      base.send(:extend, ClassMethods)
    end
    
    module ClassMethods
      
      def attributes
        @attributes ||= []
      end
      
      def attrs
        @attributes
      end
      
      def for_sproutcore(*opt)
        raise Sproutcore::Errors::NotAnArrayArgumentArror, "params is not an array!" unless opt.is_a?(Array)
        opt.each do |argument|
          attributes << argument
        end
        
        define_method("sproutcore_attributes") do 
          return self.class.attrs
        end
      end
      
    end
    
    module InstanceMethods
      
    end
    
  end
  
  
end

