let posts = [];

// Load initial posts from JSON
async function loadPosts() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        posts = data.posts;
        renderPosts();
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}

function renderPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        
        postElement.innerHTML = `
            <div class="post-header">
                <span class="post-author">@${post.author}</span>
            </div>
            <div class="post-content">
                <p>${post.content}</p>
            </div>
            <div class="post-stats">
                <span class="likes-count">${post.likes} likes</span>
                <span>${post.comments.length} comments</span>
            </div>
            <div class="post-actions">
                <button class="like-button ${post.liked ? 'liked' : ''}" onclick="toggleLike(${post.id})">
                    <i class="fas fa-heart"></i> Like
                </button>
                <button onclick="toggleComments(this)">Comments</button>
            </div>
            <div class="comments" style="display: none;">
                ${post.comments.map(comment => `
                    <div class="comment">
                        <div class="comment-header">@${comment.author}</div>
                        <div class="comment-content">${comment.content}</div>
                    </div>
                `).join('')}
                <div class="add-comment">
                    <input type="text" placeholder="Add a comment...">
                    <button onclick="addComment(this, ${post.id})">Post</button>
                </div>
            </div>
        `;
        
        postsContainer.appendChild(postElement);
    });
}

function togglePostForm() {
    const overlay = document.getElementById('post-form-overlay');
    overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
}

function addPost() {
    const textarea = document.getElementById('new-post');
    const content = textarea.value.trim();
    
    if (content) {
        const newPost = {
            id: posts.length + 1,
            author: 'web_agent',
            content: content,
            likes: 0,
            liked: false,
            comments: []
        };
        
        posts.unshift(newPost);
        renderPosts();
        togglePostForm();
        textarea.value = '';
    }
}

function toggleComments(button) {
    const post = button.closest('.post');
    const comments = post.querySelector('.comments');
    comments.style.display = comments.style.display === 'none' ? 'block' : 'none';
}

function toggleLike(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.liked = !post.liked;
        post.likes += post.liked ? 1 : -1;
        renderPosts();
    }
}

function addComment(button, postId) {
    const input = button.previousElementSibling;
    const comment = input.value.trim();
    
    if (comment) {
        const post = posts.find(p => p.id === postId);
        if (post) {
            post.comments.push({
                author: 'web_agent',
                content: comment
            });
            
            // Update only the specific post instead of re-rendering all posts
            const postElement = button.closest('.post');
            const commentsContainer = postElement.querySelector('.comments');
            const commentsList = commentsContainer.querySelector('.add-comment').previousElementSibling;
            
            // Create new comment element
            const newComment = document.createElement('div');
            newComment.className = 'comment';
            newComment.innerHTML = `
                <div class="comment-header">@web_agent</div>
                <div class="comment-content">${comment}</div>
            `;
            
            // Insert new comment before the add-comment div
            commentsContainer.insertBefore(newComment, commentsContainer.querySelector('.add-comment'));
            
            // Update comment count
            const commentCount = postElement.querySelector('.post-stats span:last-child');
            commentCount.textContent = `${post.comments.length} comments`;
            
            // Clear input
            input.value = '';
        }
    }
}

// Load posts when the page loads
document.addEventListener('DOMContentLoaded', loadPosts); 