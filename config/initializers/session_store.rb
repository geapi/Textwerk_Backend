# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_text-werk_session',
  :secret      => '2179a0d9ef6c14a96d47f7d0a30cbabdcdc770b27edd77a37fe12d643e6e37a8ce40db416723eb2047ef506aac4fd83be51caf75802972360dd96e55215db91b'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
