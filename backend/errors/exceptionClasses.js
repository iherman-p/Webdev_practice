
class ResourceExistsException extends Error
{
	constructor()
	{
		super("Resource is in use");
		this.name = "ResourceExistsException";
	}
}

class ResourceDoesNotExistException extends Error
{
	constructor()
	{
		super("Resource does not exist or is unavaliable");
		this.name = "ResourceDoesNotExistException";
	}
}

class AuthException extends Error
{
	constructor()
	{
		super("Authentication error");
		this.name = "AuthException";
	}
}

module.exports = {
	ResourceExistsException,
	ResourceDoesNotExistException,
	AuthException,
}
