pragma solidity ^0.4.17;

contract CampaignFactory {
    
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        
        address newCampaign = new Campaign(minimum, msg.sender);
        
        deployedCampaigns.push(newCampaign);
        
    }
    
    function getDeployedCampaigns() public view returns (address[]){
        return deployedCampaigns;
    }
    
    
}

contract Campaign {
    
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    Request[] public requests; 
    address public manager;
    uint public minimumContribution;
    // address[] public approvers;
    mapping(address => bool) public approvers;
    uint approversCount;
    
    modifier restricted(){
        require(msg.sender==manager);
        _;
    }
    
    modifier restricted_approver_only(){
        // require(msg.sender==)
        _;
    }
    
    function Campaign(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        // approvers.push(msg.sender);
        approvers[msg.sender] = true;
        approversCount++;
        
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount:0
        });
        
        requests.push(newRequest);
        
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index]; //we want to manipulate the copy that exists inside storage, not memory(not local to function) 
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]); //cannot approve a request twice
        
        request.approvals[msg.sender]= true;
        request.approvalCount++;
        
    }
    
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index]; //we want to manipulate the copy that exists inside storage, not memory(not local to function) 
        
        require(request.approvalCount > (approversCount /2));
        require(!request.complete);
        
        request.recipient.transfer(request.value); //address type has transfer method already
        request.complete = true;
        
    }
    
    
    function getSummary() public view returns(uint, uint, uint, uint, address){
        
        return(
          minimumContribution,
          this.balance,
          requests.length,
          approversCount,
          manager
        );
        
    }
    
    function getRequestsCount() public view returns(uint){
        
        return requests.length;
    }
    
    
    
    
}